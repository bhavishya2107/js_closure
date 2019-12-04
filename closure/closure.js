
//1.
function nonsense(string) {
    return setTimeout(function () {
        alert(string)
    }, 2000);
}

var blabLater = nonsense('javaScript')
var blabAgainLater = nonsense('python')

//2.
function lastNameTrier(fname) {
    
    return function (lname) {
        return `${fname} ${lname}`
    }
}

var firstNameFarmer = lastNameTrier('Farmer');
firstNameFarmer('Brown');


// 1. Create a `storyWriter` function that returns an object with two methods. One method, `addWords` adds a word to your story and returns the story while the other one, `erase`, resets the story back to an empty string. Here is an implementation:
// 	```javascript
// 	var farmLoveStory = storyWriter();
// 	farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
// 	farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

// 	var storyOfMyLife = storyWriter();
// 	storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
// 	storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
// 	storyOfMyLife.erase(); // ''

// 	```


//3.
function storyWriter() {

}
