
var enterBtnIndex = document.getElementById("enter-Btn-Index");
var urlBarIndex = document.getElementById("url-Bar-Index");

var enterBtn = document.getElementById("enter-Btn");
var userInput = document.getElementById("linux-Input");
var outputDiv = document.getElementById("output-Div");

/*
white terminal text:
<h5 class="html-Code-Home-White"></h5>

green terminal text:
<h5 id="html-Code-Home"></h5>

*/
function terminalFunction(){
    if(userInput.value == "ifconfig"){
    outputDiv.innerHTML += 
    `<h5 class="html-Code-Home-White">ifconfig:<br>
    Link encap:Local Loopback <br> inet addr:132.266.69.157 Mask:256.0.0.0 <br>
    RX packets: 48 errors:0 dropped:0 overruns:0 frame:0 <br>
    TX packets: 48 errors:0 dropped:0 overruns:0 frame:0 <br>
    collisions:0 txqueuelen:0'<br>
    RX bytes:420 (5.3KiB) TX bytes:420 (5.3 KiB)<br>
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html: </h5>
    </h5`;
    }if(userInput.value == "help"){
    outputDiv.innerHTML +=
    `<h5 class="html-Code-Home-White">Help:<br>
        This is void terminal, used on voidcrypt.org <br>
        to help the user with different tasks. <br>
        Commands often used are:<br>
        - help <br>
        - ifconfig <br>
        - clear <br>
        - ls <br>
        - ls help <br>
        - cd <br>
        - hidden <br>
        - hidden <br>
        - hidden <br>
        ...
        <h5 id="html-Code-Home">Void@linux-desktop:/index.html: </h5>
        </h5`
    }if(userInput.value == "clear"){
    document. location. reload()
    }
    
}

function nmapCommand(){
    if(userInput.value == "nmap"){
    outputDiv.innerHTML += `<h5 class="html-Code-Home-White">nmap format:</h5>
    <h5 class="html-Code-Home-White">"nmap (ip address)"</h5>
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html:</h5>
    `; 
    }if(userInput.value == "nmap 132.266.69.157"){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">nmap starting...</h5>
    
    `;
    
    setTimeout(function(nmapVoidScan){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">PORT----STATE----SERVICE</h5>
    <h5 class="html-Code-Home-White">20, filtered, ftp</h5>
    <h5 class="html-Code-Home-White">21, filtered, smtp</h5>
    <h5 class="html-Code-Home-White">23, open, ssh</h5>
    <h5 class="html-Code-Home-White">25, filtered, telnet</h5>
    <h5 class="html-Code-Home-White">30, filtered, pptp</h5><br>
    <h5 class="html-Code-Home-White">nmap done: 1 ip address (1 host up) scanned in 5.03 seconds</h5>
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html:</h5>
    `;
    }, 5300);
    

    }if(userInput.value == "nmap 195.256.69.138"){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">nmap starting...</h5>
    
    `;

    setTimeout(function(nmapHackScan){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">PORT----STATE----SERVICE</h5>
    <h5 class="html-Code-Home-White">21, filtered, pptp</h5>
    <h5 class="html-Code-Home-White">26, filtered, smtp</h5>
    <h5 class="html-Code-Home-White">34, filtered, ssh</h5>
    <h5 class="html-Code-Home-White">35, filtered, ftp</h5><br>
    <h5 class="html-Code-Home-White">nmap done: 1 ip address (0 host up) scanned in 5.03 seconds</h5>
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html:</h5>
    `;
    }, 5300);



    }

}

function pingCommand(){
    if(userInput.value == "ping"){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">ping format:</h5><br>
    <h5 class="html-Code-Home-White">ping (ip address)</h5>
    <h5 class="html-Code-Home-White">ping (example.org)</h5>
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html:</h5>
    `;
    }if(userInput.value == "ping voidcrypt.org"){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">Sending request...</h5>
    
    `;

    setTimeout(function(pingScanVoid){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">64 bytes from server -132.266.69.157-voidcrypt.org</h5>
    `;
    }, 2000);

    setTimeout(function(pingScanVoid1){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">64 bytes from server -132.266.69.157-voidcrypt.org</h5>
    `;
    }, 4000);

    setTimeout(function(pingScanVoid2){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">64 bytes from server -132.266.69.157-voidcrypt.org</h5>
    `;
    }, 6000);

    setTimeout(function(pingScanVoid3){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">ping stopped and done: 3 packets recieved, servers up and running</h5>
    `;
    }, 8000);
    
    setTimeout(function(pingScanVoid4){
    outputDiv.innerHTML += `
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html:</h5>
    `;
    }, 8500);
    
    
    }if(userInput.value == "ping hackme.org"){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">Sending request...</h5>
    
    `;

    setTimeout(function(pingScanHack){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">64 bytes from server -195.256.69.138-hackme.org</h5>
    `;
    }, 2000);

    setTimeout(function(pingScanHack1){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">64 bytes from server -195.256.69.138-hackme.org</h5>
    `;
    }, 4000);

    setTimeout(function(pingScanHack2){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">64 bytes from server -195.256.69.138-hackme.org</h5>
    `;
    }, 6000);

    setTimeout(function(pingScanHack3){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">ping stopped and done: 3 packets recieved, servers up and running</h5>
    `;
    }, 8000);
    
    setTimeout(function(pingScanHack4){
    outputDiv.innerHTML += `
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html:</h5>
    `;
    }, 8500);
    
    }



}

function lsCatCdCommand(){
    if(userInput.value == "ls"){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">News.html</h5>
    <h5 class="html-Code-Home-White">About.html</h5>
    <h5 class="html-Code-Home-White">Decryption.html</h5>
    <h5 class="html-Code-Home-White">lore.html</h5>
    <h5 class="html-Code-Home-White">Programs.folder</h5>
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html:</h5>
    
    `;
    }if(userInput.value == "ls help"){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">ls is used to see the contents of the directory you are in</h5>
    <h5 class="html-Code-Home-White">But here you can only ls to /index.html</h5>
    <h5 class="html-Code-Home-White">Maybe you can "ls (folder name)" or "ls(file name)? i dont remember honestly.."</h5>
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html:</h5>
    `;

    }if(userInput.value == "ls Programs.folder"){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">nmap.program</h5>
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html/Programs.folder:</h5>

    `;
    }if(userInput.value == "cd About.html"){
    window.location.href="About.html";
    }if(userInput.value == "cd News.html"){
    window.location.href="News.html";
    }if(userInput.value == "cd Decryption.html"){
    window.location.href="Decryption.html";
    }if(userInput.value == "cd lore.html"){
    window.location.href="lore.html";
    }if(userInput.value == "cd .."){
    outputDiv.innerHTML += `
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html:</h5>
    
    `;

    /* cat commands start */
    }if(userInput.value == "cat About.html"){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">About.html is a page, cant reach it with "cat"</h5>
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html:</h5>
    `;
    }if(userInput.value == "cat News.html"){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">News.html is a page, cant reach it with "cat"</h5>
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html:</h5>
    `;
    }if(userInput.value == "cat Decryption.html"){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">Decryption.html is a page, cant reach it with "cat"</h5>
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html:</h5>
    `;
    }if(userInput.value == "cat lore.html"){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">lore.html is a page, cant reach it with "cat"</h5>
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html:</h5>
    `;
    }if(userInput.value == "cat"){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">Cat(concatenate) command is very frequently used in Linux. It reads data from the file and gives its content as output</h5>
    <h5 class="html-Code-Home-White">This must be used to see contents inside an .file</h5>
    <h5 class="html-Code-Home-White">and you only can be inside directory "Void@linux-desktop:/index.html:" when being in the mainpage (which is where the terminal is)</h5>
    <h5 class="html-Code-Home-White">Or maybe you can go to other directories? I dont remember... I get lost in the code sometimes</h5>
    <h5 class="html-Code-Home-White">Hard to explaid the usage of this terminal without giving tips that can ruin one of your tasks :(</h5>
    <h5 class="html-Code-Home-White">I can say that you can still try to combine the "cd" command to a direc..... d4H k21Af I9 asFG3A.... ERROR (69)</h5>
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html:</h5>
    `;
    }if(userInput.value =="cat Programs.folder"){
    outputDiv.innerHTML += `
    <h5 class="html-Code-Home-White">You cant cat into a folder</h5>
    <h5 id="html-Code-Home">Void@linux-desktop:/index.html:</h5>
    `;
    }
}


enterBtn.addEventListener('click',() => {    
terminalFunction();
nmapCommand();  
pingCommand();  
lsCatCdCommand();
});

/* End Index */

function urlSearch(){
    if(urlBarIndex.value == "https://silk-road.onion"){
    window.location.href = "Silk-Road-onion.html";

    }if(urlBarIndex.value == "silk-road.onion"){
    window.location.href = "Silk-Road-onion.html";

    }if(urlBarIndex.value == "https://voidcrypt.org"){
    alert("You are here...");

    }if(urlBarIndex.value == "voidcrypt.org"){
    alert("You are here...");

    }if(urlBarIndex.value == "about.html"){
    window.location.href = "About.html";

    }else{
    alert(`Url dont support or could not find "${urlBarIndex.value}", if you typed https:// before, try without`);
    }
    
}



enterBtnIndex.addEventListener('click',() => {    
urlSearch();
});