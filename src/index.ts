const img=document.querySelector('img');
const btn=document.querySelector('button');

const getLink = async () =>{


    const data=await axios.get("https://meme-api.herokuapp.com/gimme")
    
    
    const todoItems = data.data.preview[data.data.preview.length-1] as String;
    
    return todoItems;
    
}

let tem=setInterval(()=>ChangeMema(null),10000);

const ChangeMema=async (event:Event)=>{

    // console.log(axios)

    clearInterval(tem);

    img.classList.add('See');
    
    const Link=await getLink(axios);
    
    // console.log(Link);/
    img.classList.remove('See');
    img.src=Link as unknown as string;
    tem=setInterval(()=>ChangeMema(null),10000);

    
}

ChangeMema(null)

