async function getUrl() {
    try {
        const fetched = await fetch("https://random.dog/woof.json?ref=apilist.fun");
        let jsonRes =  await fetched.json()
        let aElem = document.getElementById('link'); 
        aElem.href = jsonRes.url;

        if ( jsonRes.url.includes(".jpg") || jsonRes.url.includes(".png") || jsonRes.url.includes(".jpeg") || jsonRes.url.includes(".gif") ) {
            
            if(document.getElementById('dog-image')) {
                document.getElementById('dog-image').remove();
            }
            if(document.getElementById('dog-video')) {
                document.getElementById('dog-vid').remove();
            }

            let img = document.createElement('img');
            img.src = jsonRes.url;
            img.id = 'dog-image'
            document.getElementById('dog-img').append(img);
            document.getElementById('dog-pic-url').value = jsonRes.url;

        }
        if ( jsonRes.url.includes(".mp4") ) {

            if(document.getElementById('dog-image')) {
                document.getElementById('dog-image').remove();
            }

            if(document.getElementById('dog-video')) {
                document.getElementById('dog-video').remove();
            }

            let videoElem = document.getElementById('dog-vid')
            
            videoElem.style.display='block'
            let vid = document.createElement('source');
            vid.src = jsonRes.url;
            vid.type = "video/mp4"
            vid.id = 'dog-video'
            videoElem.append(vid);
            document.getElementById('dog-pic-url').value = jsonRes.url;
        }
    }
    catch (error) {
        throw new Error(error.message);
    }

}

async function copyUrl() {
    try {
        if(document.getElementById('dog-image')) {
            let copyText = document.getElementById("dog-image");
            await navigator.clipboard.writeText(copyText.src);
        }

        if(document.getElementById('dog-video')) {
            let copyText = document.getElementById("dog-video");
            await navigator.clipboard.writeText(copyText.src);
        }
    } catch (error) {
        console.log(error.message);
    }

  }

