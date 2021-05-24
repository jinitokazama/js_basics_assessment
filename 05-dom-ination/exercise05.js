/**
 * Given the HTML below, please make the following changes with javascript – don't change any HTML!:
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post")
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *    
 */

(function () {

    // 1
    let feedbackTitle = document.querySelector("div h1");
    feedbackTitle.addEventListener('click', function() {
        if (feedbackTitle.style.color === 'red') {
            feedbackTitle.style.color = 'black';
        } else {
            feedbackTitle.style.color = 'red';
        }
    })

    // 2
    let allLinks = document.querySelectorAll("h5 a")
    console.log("All;links", allLinks)
   allLinks[1].remove()
   allLinks[3].remove()
   allLinks[5].remove()


    // 3
    let allBacon = document.querySelectorAll("div p")
    for (let node of allBacon) {
        node.innerText = node.innerText.replace('Bacon', 'LASER VISION');
    }

    // 4
    let allPosts = document.querySelectorAll('.row.post')
    allPosts[5].remove();
    allPosts[6].remove();
    

    // 5
    let images = document.querySelector("aside")
    images.remove();

})();