var should = require('should');
var assert = require('assert');
var request = require('supertest');
 
describe('SPMServeur', function() {
	var url = 'http://127.0.0.1:3000';
	
	before(function(done) {
		done();
	});
	
	// GET BACKLOG!
	describe('get /backlog', function() {
		it('should return full backlog', function(done) {
			
			request(url)
			.get('/backlog/')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res, body) {
				if (err) {
					throw err;
				}
				stories = JSON.parse(res.text);
				stories.length.should.equal(2);
				story1 = stories[0];
				story1.numeroUS.should.equal(1);
				story1.contenuUS.should.equal('ETQ Dev, je veux des US dans mon gui');				
				done();
			});
		});
	});

	describe('get /backlog/id', function() {
		it('should return one story by id', function(done) {
			
			request(url)
			.get('/backlog/1')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res, body) {
				if (err) {
					throw err;
				}
				story1 = JSON.parse(res.text);
				console.log(story1);
				story1.numeroUS.should.equal(1);
				story1.contenuUS.should.equal('ETQ Dev, je veux des US dans mon gui');				
				done();
			});
		});
	});


});