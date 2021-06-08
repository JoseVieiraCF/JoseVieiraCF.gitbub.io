function tabNavigation(){
    const tabs = {
        links :[...document.querySelector('.tab-links').children],
        contents:[...document.querySelector('.tab-content').children],
        openTab: document.querySelector('[data-default]')
    }
    
    
    function hideAllTabContent(){
        tabs.contents.forEach(section => {
            section.style.display = "none"
        });
    }
    function selectTab(e){
        remoAllActiveClass();
        hideAllTabContent();
        const target = e.currentTarget;
        showCurrentTab(target.dataset.id);
        target.className += " active"

    }
    function remoAllActiveClass(){
        tabs.links.forEach(section => {
            section.className = section.className.replace("active", "")
        });
    }
    function showCurrentTab(id){
        const tabContent = document.querySelector('#'+id);
        tabContent.style.display = "flex";
    }



    function listenChanges(){
        tabs.links.forEach(tab => {
            tab.addEventListener('click',selectTab)
        });
    }
    function init(){
        hideAllTabContent();
        listenChanges();
        tabs.openTab.click();
    }


    return {init};
}

window.addEventListener('load',() => {
    const tab = tabNavigation();
    tab.init();
});

