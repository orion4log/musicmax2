function fonot() {
if (document.getElementsByClassName('ticker')[0].style.backgroundColor == 'grey') {
    document.getElementsByClassName('ticker')[0].style.backgroundColor = 'transparent';
    document.getElementsByClassName('ticker2')[0].style.backgroundColor = 'transparent';
    document.getElementsByClassName('ticker3')[0].style.backgroundColor = 'transparent';
    document.getElementsByClassName('ticker')[0].style.color = 'black';
    document.getElementsByClassName('ticker2')[0].style.color = 'black';
    document.getElementsByClassName('ticker3')[0].style.color = 'black';
    }
 else {
    document.getElementsByClassName('ticker')[0].style.backgroundColor = 'grey';
    document.getElementsByClassName('ticker2')[0].style.backgroundColor = 'grey';
    document.getElementsByClassName('ticker3')[0].style.backgroundColor = 'grey';
    document.getElementsByClassName('ticker')[0].style.color = 'white';
    document.getElementsByClassName('ticker2')[0].style.color = 'white';
    document.getElementsByClassName('ticker3')[0].style.color = 'white';
    }
}
