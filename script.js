setInterval(fun = () => {
    setTimeout(() => {
        var p = document.querySelector('.p');
        p.innerHTML = "Loading";
    }, 1000);
    setTimeout(fun = () => {
        var p = document.querySelector('.p');
        p.innerHTML = "Loading.";
    }, 2000);
    setTimeout(fun = () => {
        var p = document.querySelector('.p');
        p.innerHTML = "Loading..";
    }, 3000);
    setTimeout(fun = () => {
        var p = document.querySelector('.p');
        p.innerHTML = "Loading...";
    }, 4000);
}, 4000);
fun()