/*jshint esversion: 6 */
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('has defined URL', function() {
      for (const feed of allFeeds) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      }
    });


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

    it('has defined name', function() {
      for (const feed of allFeeds) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      }
    });

  });

  /* Great explaination from Mohammed Riaad's awesome Study Jam on this section! */
  /* TODO: Write a new test suite named "The menu" */
  describe('The menu', function() {


    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    var body = document.body;
    var menuIcon = document.querySelector('.menu-icon-link');
    it('menu hidden', function() {
      expect(body.className).toContain('menu-hidden');
    });


    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('displays when clicked and hides when clicked again', function() {
      menuIcon.click();
      expect(body.className).not.toContain('menu-hidden');
      menuIcon.click();
      expect(body.className).toContain('menu-hidden');
    });


  });

  /* Received heaps of help from Mohammed Riaad's awesome Study Jam on this section too! */
  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function() {

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it('at least one entry after loadFeed is called and completed its work', function(done) {
      var entryNum = document.querySelector('.feed').getElementsByClassName('entry').length;
      expect(entryNum).toBeGreaterThan(0);
      done();
    });

  });
  /* Received heaps of help from Mohammed Riaad's awesome Study Jam on this section too! */
  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    var selectedFeed;

    beforeEach(function(done) {
      loadFeed(0, function() {
        selectedFeed = document.querySelector('.feed').innerHTML;
        loadFeed(1, function() {
          done();
        });
      });
    });

    it('feed changes after loadFeed function', function(done) {
      var newSelectedFeed = document.querySelector('.feed').innerHTML;
      expect(selectedFeed).not.toBe(newSelectedFeed);
      done();
    });

  });

}());