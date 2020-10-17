window.onload = () => {

    init();

    window.addEventListener('keydown', (e) => {
        console.log(e);
        const {key} = e;
        if(key == 'ArrowDown' || key == 'ArrowRight'){ // 下一页
            toPage('next');
        }
        if(key == 'ArrowUp' || key == 'ArrowLeft'){ // 上一页
            toPage('prev');
        }
    });
}

function init(){
    const $pages = document.querySelectorAll('.page');
    const pageLen = $pages.length;
    for(let i = 0; i < pageLen; i++){
        const $page = $pages[i];
        $page.style['left'] = `${100 * i}%`;
        $page.setAttribute('data-index', i);
    }
}


function toPage(type){
    const $curPage = document.querySelector('.cur');
    const $box = document.querySelector('.box');
    const curIndex = $curPage.getAttribute('data-index') - 0;
    const $pages = document.querySelectorAll('.page');
    const pageLen = $pages.length;
    let toPageIndex;
    if(type === 'next'){
        if(curIndex === pageLen - 1){
            toPageIndex = 0;
        }else{
            toPageIndex = curIndex + 1;
        }
    }else{
        if(curIndex === 0){
            toPageIndex = pageLen - 1;
        }else{
            toPageIndex = curIndex - 1;
        }
    }
    const $toPage = $box.children[toPageIndex];
    $curPage.className = 'page';
    $toPage.className = 'page cur';
    $box.style['transform'] = `translate3d(-${100 * toPageIndex}%, 0px, 0px)`;

    const tip = $toPage.getAttribute('data-tip');
    if(tip){

    }
}