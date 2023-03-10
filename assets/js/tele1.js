
    let previous = document.querySelector('#pre');
    let play = document.querySelector('#play');
    let next = document.querySelector('#next');
    let microphone = document.querySelector('#microphone');
    let recent_volume= document.querySelector('#volume');
    let volume_show = document.querySelector('#volume_show');
    let slider = document.querySelector('#duration_slider');
    let show_duration = document.querySelector('#show_duration');
    let mic_image = document.querySelector('#mic_image');
    let auto_play = document.querySelector('#auto');
    
    let tech = document.querySelector('#tech');
    
    
    
    let timer;
    let autoplay = 0;
    
    let index_no = 0;
    let Playing_song = false;
    
    
    var pom;
    
    let track = document.createElement('audio');
    
    
    //Wszystkie pliki audio
    let All_tracks = [
       {
         name: "Apollo x4",
         path: "PreampTracks/Fortepian/UAD_ABR_Fortepian_12.wav",
         img_producent: "MicPictures/Preamp/Pm40.png",
       },
       {
         name: "Helios Type 69",
         path: "PreampTracks/Fortepian/Helios_ABR_Fortepian_12.wav",
         img_producent: "MicPictures/Preamp/Pm40.png",
       },
       {
         name: "V76",
         path: "PreampTracks/Fortepian/V76_ABR_Fortepian_1.wav",
         img_producent: "MicPictures/Preamp/Pm40.png",
       },
       {
         name: "UA-610 A",
         path: "PreampTracks/Fortepian/610A_ABR_Fortepian_12.wav",
         img_producent: "MicPictures/Preamp/Pm40.png",
       },
       {
         name: "UA-610 B",
         path: "PreampTracks/Fortepian/610B_ABR_Fortepian_12.wav",
         img_producent: "MicPictures/Preamp/Pm40.png",
       },
       {
         name: "Avalon VT-737sp",
         path: "PreampTracks/Fortepian/Avalon_ABR_Fortepian_12.wav",
         img_producent: "MicPictures/Preamp/Pm40.png",
       },
		{
         name: "Century Tube CS",
         path: "PreampTracks/Fortepian/CS_ABR_Fortepian_12.wav",
         img_producent: "MicPictures/Preamp/Pm40.png",
       }
    ];
    
    
    // All functions
    
    
    // function load the track
    function load_track(index_no){
    
      pom = track.currentTime;
        track.src = All_tracks[index_no].path;
        microphone.innerHTML = All_tracks[index_no].name;	
    
        mic_image.src = All_tracks[index_no].img_producent;
    
        track.currentTime = pom + 0.05;
    
    
        timer = setInterval(range_slider ,1000);
    
      track.load();
    }
    
    load_track(index_no);
    
    
    //Wyciszanie d??wi??ku
    function mute_sound(){
        track.volume = 0;
        volume.value = 0;
        volume_show.innerHTML = 0;
    }
    
    
    // sprwadzenie czy ??cie??ka gra czy nie
    function justplay(){
         if(Playing_song==false){
             playtrack();
    
         }else{
             pausetrack();
         }
     }
    
    
    
    // odtwarzanie
    function playtrack(){
      track.play();
      Playing_song = true;
      play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    }
    
    // pauzowanie
    function pausetrack(){
        track.pause();
        Playing_song = false;
        play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
    
    //funkcje odpowiadaj??ce za wyb??r konkretnego mikrofonu (za pomoc?? indeksu All_tracks)
    
    function switchApollo(){
        index_no = 0;
            load_track(index_no);
            playtrack();
    }
    function switchHelios(){
        index_no = 1;
            load_track(index_no);
            playtrack();
    }
    function switchV76(){
        index_no = 2;
            load_track(index_no);
            playtrack();
    }
    function switch610A(){
        index_no = 3;
            load_track(index_no);
            playtrack();
    }
    function switch610B(){
        index_no = 4;
            load_track(index_no);
            playtrack();
    }
    function switchAvalon(){
        index_no = 5;
            load_track(index_no);
            playtrack();
    }
	function switchCS(){
        index_no = 6;
            load_track(index_no);
            playtrack();
    }
    
    
    
    // zmiana g??o??no??ci
    function volume_change(){
        volume_show.innerHTML = recent_volume.value;
        track.volume = recent_volume.value / 100;
    }
    
    // zmiana pozycji przewijania 
    function change_duration(){
        slider_position = track.duration * (slider.value / 100);
        track.currentTime = slider_position;
    }
    
    function range_slider(){
        let position = 0;
            
            // aktualizacja pozycji przewijania
            if(!isNaN(track.duration)){
               position = track.currentTime * (100 / track.duration);
               slider.value =  position;
              }
    
         }
    
    var apollo = document.getElementById("Apollo");
    var Helios = document.getElementById("Helios");
    var V76 = document.getElementById("V76");
    var A610 = document.getElementById("610A");
    var B610 = document.getElementById("610B");
    var Avalon = document.getElementById("Avalon");
	var CS = document.getElementById("CS");
    
    apollo.addEventListener("click", switchApollo);
    Helios.addEventListener("click", switchHelios);
    V76.addEventListener("click", switchV76);
    A610.addEventListener("click", switch610A);
    B610.addEventListener("click", switch610B);
    Avalon.addEventListener("click", switchAvalon);
	CS.addEventListener("click", switchCS);
