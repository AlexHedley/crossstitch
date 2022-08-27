  // DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
    { id: 1, content: 'Owls', start: '1998-01-01' },
    { id: 2, content: 'Pooh and Tigger\'s Verse Gift Cards', start: '2001-01-01' },
    { id: 3, content: 'Griffindor House Banner', start: '2004-01-01' },
    { id: 4, content: 'A Bear For All Seasons', start: '2006-01-01' },
    { id: 5, content: 'Winnie The Pooh - A', start: '2006-01-01' },
    { id: 6, content: 'Winnie The Pooh - N', start: '2006-01-01' },
    { id: 7, content: 'Dragon', start: '2007-01-01' },
    { id: 8, content: 'A Bear For All Seasons', start: '2006-01-01' },
    { id: 9, content: 'Bear/Bunny', start: '2013-01-01' },
    { id: 10, content: 'Mouseloft Christmas Cards', start: '2014-12-25' },
    { id: 11, content: 'The Magnificent Stromboli\'s Circus', start: '2014-12-25' },
    { id: 12, content: 'Sleeping Beauty', start: '2014-01-01' },
    { id: 13, content: 'Me To You Bear', start: '2015-01-01' },
    { id: 14, content: 'Kiss', start: '2015-12-12' },
    { id: 15, content: 'Frozen', start: '2015-01-01' },
    { id: 16, content: 'The Gruffalo', start: '2015-01-01' },
    { id: 17, content: 'Alice in Wonderland - We\'re all mad here', start: '2016-01-01' },
    { id: 18, content: 'King Valiant\'s Castle', start: '2016-01-01' },
    { id: 19, content: 'The Lord of the Rings - The fellowship of the Ring', start: '2016-01-01' },
    { id: 20, content: 'The Hobbit - An unexpected Journey', start: '2016-01-01' },
    { id: 21, content: 'The Beatles - Yellow Submarine', start: '2016-01-01' },
    { id: 22, content: 'Maleficent', start: '2017-01-01' },
    { id: 23, content: 'MetallicA', start: '2018-01-01' },
    { id: 24, content: 'Captain Jack\'s Pirate Ship', start: '2019-01-01' },
    { id: 25, content: 'Floragenius', start: '2020-01-01' },
    { id: 26, content: 'The Blues Brothers', start: '2020-01-01' },
    { id: 27, content: 'Deadpool Saxophone', start: '2020-01-01' },
    { id: 28, content: 'Christmas Decoration', start: '2020-12-25' },
    { id: 29, content: 'Harry Potter - Harry, Ron & Hermione', start: '2021-01-01' },
    { id: 30, content: 'FRIENDS', start: '2021-01-01' },
    { id: 31, content: 'Two Minipeople Family', start: '2021-01-01' },
    { id: 32, content: 'Turtles', start: '2021-01-01' },
    { id: 33, content: 'The Scream', start: '2021-01-01' },
    { id: 34, content: 'Wanderer above the Sea of Fog', start: '2021-01-01' },
    { id: 35, content: 'Transformers', start: '2021-01-01' },
    { id: 36, content: 'Brotherhood of Mutants - X-Men enemies', start: '2021-01-01' }
]);

// Configuration for the Timeline
var options = {};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);