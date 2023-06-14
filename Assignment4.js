//BONUS
/**
 * this function is changes the innerHTML of the <h1> of class result to 
 * display the volume of the sphere based on the radius entered
 */
function volumeOfSphere() {
    var radius = document.getElementById('radius').value;
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);
    document.querySelector('.result').innerHTML = "The volume of the sphere is: " + volume.toFixed(2);
}