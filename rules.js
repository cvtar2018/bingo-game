function giveAlert () {
    alert("Successful")
}

function initBoard () {
    
}

const arr1 = [1,2,3,4,5,6]
const arr2 = []

const ran = () => {
  const index = Math.floor(Math.random() * arr1.length);
  if(arr1.length>0)
  {
    arr2.push(arr1[index])
    arr1.splice(index, 1)
    
    const display = document.getElementById('array')
    display.innerText = ("\nArray 2 elements " + arr2.toString() + "\n Remaining Array 1 elements" + arr1.toString())
  }
  else
    {
      document.write("Array is now empty");
    }
}