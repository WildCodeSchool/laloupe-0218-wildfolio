import * as chai from 'chai';
import * as chaiHttp from 'chai-http';

process.env.NODE_ENV = 'test';
import { app } from '../app';
import cityModel from '../models/cityModel';

const should = chai.use(chaiHttp).should();

describe('cities', () => {

  beforeEach((done) => {
    cityModel.remove({}, (err) => {
      done();
    });
  });

  describe('Backend tests for cities', () => {

    it('should get all the cities', (done) => {
      chai.request(app)
        .get('/api/cities')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

    it('should get cities count', (done) => {
      chai.request(app)
        .get('/api/cities/count')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('number');
          res.body.should.be.eql(0);
          done();
        });
    });

    it('should create new city', (done) => {
      const newCity = new cityModel({ name: 'Fluffy'});
      chai.request(app)
        .post('/api/city')
        .send(newCity)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.a.property('name');
          done();
        });
    });

    it('should get a city by its id', (done) => {
      const newCat = new cityModel({ name: 'city'});
      newCat.save((error, newcity) => {
        chai.request(app)
          .get(`/api/city/${newcity.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name');
            res.body.should.have.property('_id').eql(newcity.id);
            done();
          });
      });
    });

    it('should update a city by its id', (done) => {
      const newCity = new cityModel({ name: 'city'});
      newCity.save((error, newcity) => {
        chai.request(app)
          .put(`/api/city/${newcity.id}`)
          .send({ weight: 5 })
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });

    it('should delete a city by its id', (done) => {
      const newCity = new cityModel({ name: 'city'});
      newCity.save((error, newcity) => {
        chai.request(app)
          .delete(`/api/city/${newcity.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });

});


