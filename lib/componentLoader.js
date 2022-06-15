$(window).on("load", ()=>{
    $("[component]").each(async function(){
        const componentURL = $(this).attr("component");
        const fetc = await fetch(`lay/${componentURL}.html`);
        const txt = await fetc.text();
        $(this).html(txt);
    });
})