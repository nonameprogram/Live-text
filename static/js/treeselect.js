 function navselect() {
     if (statequestion == true) {
         unblock();
         $(".maincont").html(`
	 
    <div class="showq">
    <span style="font-size:30px" class="f200"><svg class="svg-inline--fa fa-layer-group fa-w-16 icon_mg" aria-hidden="true" data-prefix="fas" data-icon="layer-group" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"></path></svg><!-- <i class="fas fa-layer-group icon_mg"></i> --><!-- <i class="fas fa-exclamation-circle icon_mg"></i> --> Wybierz typ pytania, które chcesz utworzyć.</span><br>
    
    <select onchange="select(this.options[this.selectedIndex].value)" style="
    margin-top: 30px;
">
<option style="display:none" disabled="" selected="" value=""> -- Wybierz -- </option>
                <option value="open">Pytanie otwarte</option>
                <option value="single">Pytanie pojedyńczego wyboru</option>
                <option value="chapter">Rozdział</option>
                <option value="multi">Pytanie wielokrotnego wyboru</option>
				<option value="match">Pytanie dopasuj</option>
            </select>
			
			
            <div class="selectedcontent"></div></div>`)
     }
 }

 function select(selected) {
     window.quill1 = "";
     window.quill2 = "";
     window.quill3 = "";
     window.quill4 = "";
     window.quill5 = "";
     $("#err").html("");
     let container = $(".selectedcontent");
     container.html("");

     if (selected == 'single') {

         container.html(`
				<div class="etykieta f25" style="margin-top:40px;"><i class="fas fa-info icon_mg"></i> Informacje o pytaniu</div><br>
				<div class="quest-info">
                <label  for="name" class="etykieta">Etykieta pytania</label><br>
                <input id="singlename" type="text" name="name" class="question">  <br>
                <label for="points" class="etykieta">Ilość punktów za pytanie</label><br>
                <input id="numberofpoints" type="number" class="question"> <br>
				<label for="tresc" class="etykieta" style="display:block">Treść pytania</label><br>
                <div id="singlecontent"></div>
                </div>
				<div class="etykieta f25"><i class="far fa-clone icon_mg"></i> Możliwe odpowiedzi</div><br>
				<div class="quest-info">
                <div class="num firstans">
                <label class="a" for="single1"><input id="single1" type="radio" value="1" name="ans" class="radio-c" checked><span class="checkmark"></span>Pierwsza odpowiedź</label>
                <div id="single1ans">
                </div>                
                </div>
                
                <div class="num secondans">
                <label class="a mg30" for="single2"><input id="single2" type="radio" value="2" name="ans" class="radio-c" checked><span class="checkmark"></span>Druga odpowiedź</label>
                <div id="single2ans">

                
                
                </div>
                </div>
				</div>
                <button id='possibility' onclick="addpossibility()" class="link-button f300">Dodaj możliwą odpowiedź</button>
                <input type="file" id="siofu_input" style="display:none;"/>
                <label class="etykieta mg30 f25 pointer" for="siofu_input"><i class="fas fa-cloud-upload-alt icon_mg"></i> Wybierz plik</label><br>
				<div id='qimg' style='max-width:800px'> </div>
                <span>Możliwe rozszerzenia: png, jpg, jpeg, bmp, pdf </span><br>
                <button onclick="addsingle('add')" class="add-button">Dodaj</button> <div id="err"></div>`);
         quil1("singlecontent");
         quil2("single1ans");
         quil3("single2ans");
         quilleditor();

     } else if (selected == 'match') {
         container.html(` 
                <div class="etykieta f25" style="margin-top:40px;"><i class="fas fa-info icon_mg"></i> Informacje o pytaniu</div><br>
				<div class="quest-info">
                <label  for="name" class="etykieta">Etykieta pytania</label><br>
                <input id="matchname" type="text" name="name" class="question"><br>
				<label for="points" class="etykieta">Ilość punktów za pytanie</label><br>
                <input id="numberofpoints" type="number" class="question"> <br>   
                <label class="etykieta" style="display:block;">Treść pytania</label><br>				
                <div id="matchcontent">
                </div></div>
				<br>
				<div class="etykieta f25"><i class="far fa-clone icon_mg"></i> Możliwe odpowiedzi</div><br>
				<div id='matchall' class="quest-info">
				<div class="column-quest">
					<div class="column-questl">
						<div class="num firstans">
						<label class="a" for="multi1">Pierwsza odpowiedź</label>
						<div id="match1"></div>
						</div>
					</div>
					<div class="column-questl2">
						<i class="fas fa-long-arrow-alt-right"></i>
					</div>
					<div class="column-questr">
						<label class="a" for="match1">Dopasowanie do pierwszej odpowiedzi</label>
						<div id="match1ans" class="question"></div>
						
					</div>
				</div>
				
				<div class="column-quest">
					<div class="column-questl">
						<div class="num secondans">
						<label class="a" for="match2">Druga odpowiedź</label>
						<div id="match2"></div>
						</div>
					</div>
					<div class="column-questl2">
						<i class="fas fa-long-arrow-alt-right"></i>
					</div>
					<div class="column-questr">
						<label class="a" for="match2">Dopasowanie do drugiej odpowiedzi</label>
						<div id="match2ans" class="question"></div>
						
					</div>
				</div>

                </div>
                </div>
				<br>
                <button id='possibility' onclick="addpossibility2()" class="link-button f300">Dodaj możliwą odpowiedź</button><br>                
                <button id='fakeans' onclick="fake(this)" class="link-button f300">Dodaj fałszywą odpowiedź</button><br>                
                <button id='fakematch' onclick="fake(this)" class="link-button f300">Dodaj fałszywe dopasowanie</button><br>
                <input type="file" id="siofu_input" style="display:none;"/>
                <label class="etykieta mg30 f25 pointer" for="siofu_input"><i class="fas fa-cloud-upload-alt icon_mg"></i> Wybierz plik</label><br>
				<div id='qimg'> </div>
                <span>Możliwe rozszerzenia: png, jpg, jpeg, bmp, pdf </span><br>
                <button onclick="addmatch('add')" class="add-button">Dodaj</button> <div id="err"></div>`);
         quil1("matchcontent");
         quil2("match1");
         quil3("match1ans");
         quil4("match2");
         quil5("match2ans");
         quilleditor();
     } else if (selected == 'multi') {
         container.html(` 
                <div class="etykieta f25" style="margin-top:40px;"><i class="fas fa-info icon_mg"></i> Informacje o pytaniu</div><br>
				<div class="quest-info">
                <label  for="name" class="etykieta">Etykieta pytania</label><br>
                <input id="multiname" type="text" name="name" class="question"><br>
				<label for="points" class="etykieta">Ilość punktów za pytanie</label><br>
                <input id="numberofpoints" type="number" class="question"> <br>   
                <label class="etykieta" style="display:block;">Treść pytania </label><br>				
                <div id="multicontent">
                </div></div>
				<br>
				<div class="etykieta f25"><i class="far fa-clone icon_mg"></i> Możliwe odpowiedzi</div><br>
				<div class="quest-info">
                <div class="num firstans">
                <label class="a" for="multi1"><input id="multi1" type="checkbox" value="1" name="ans" class="icon_mg radio-c" checked><span class="checkmark"></span>Pierwsza odpowiedź </label>
                <div id="multi1ans">
                </div>                
                </div>
                
                <div class="num secondans">
                <label class="a mg30" for="multi2"><input id="multi2" type="checkbox" value="2" name="ans" class="icon_mg radio-c" checked><span class="checkmark"></span>Druga odpowiedź</label>
                <div id="multi2ans">

               
			   
                </div>
                </div>
                </div>
                <button id='possibility' onclick="addpossibility1()" class="link-button f300">Dodaj możliwą odpowiedź</button><br><br>
				<div id='qimg'> </div>
                <span>Możliwe rozszerzenia: png, jpg, jpeg, bmp, pdf </span><br>
                <button onclick="addmulti('add')" class="add-button">Dodaj</button> <div id="err"></div>`);
         quil1("multicontent");
         quil2("multi1ans");
         quil3("multi2ans");
         quilleditor();
     } else if (selected == 'open') {
         container.html(`
                <div class="etykieta f25" style="margin-top:40px;"><i class="fas fa-info icon_mg"></i> Informacje o pytaniu</div><br>
				<div class="quest-info">
                <label  for="name" class="etykieta">Etykieta pytania</label><br>				
                <input id="openname" type="text" name="name" class="question"><br>
				<label for="points" class="etykieta">Ilość punktów za pytanie</label><br>
                <input id="numberofpoints" type="number" class="question"> <br>
                </div>
				<div class="etykieta f25"><i class="far fa-clone icon_mg"></i> Treść pytania</div><br>
				<div class="quest-info">
				<div id="opencontent"></div>                <br></div></div>
                <input type="file" id="siofu_input" style="display:none;"/>
                <label class="etykieta mg30 f25 pointer" for="siofu_input"><i class="fas fa-cloud-upload-alt icon_mg"></i> Wybierz plik</label><br>
				<div id='qimg'> </div>
                <span>Możliwe rozszerzenia: png, jpg, jpeg, bmp, pdf </span><br>
                <button onclick="addopen('add')" class="add-button">Dodaj</button> <div id="err"></div>`);
         quil1("opencontent");
     } else if (selected == 'chapter') {
         container.html(`<div class="etykieta f25" style="margin-top:40px;"><i class="fas fa-info icon_mg"></i> Informacje o rozdziale</div><br>
				<div class="quest-info"><label  for="name" class="etykieta">Nazwa rodziału</label><br>
                <input id="chaptername" type="text" name="name" class="question"><br>     
				<label for="content" class="etykieta">Opis rodziału</label><br>
                <input id="chaptercontent" type="text" name="content" class="question"></div>
                <button onclick="addchapter()" class="add-button">Dodaj</button> <div id="err"></div>`)
     }

     let src;
     var uploader = new SocketIOFileUpload(socket);
     var uploader_content = new SocketIOFileUpload(socket);
     var uploader_1 = new SocketIOFileUpload(socket);
     var uploader_2 = new SocketIOFileUpload(socket);
     uploader.maxFileSize = 300000;

     if ($("#siofu_input").length != 0) {
         uploader.listenOnInput($("#siofu_input")[0]);
     }


     uploader.addEventListener("error", function (data) {
         if (data.code === 1) {
             alert("Don't upload such a big file");
         }
     });

     uploader.addEventListener("start", function (event) {
         if (event.file.type != "image/png" && event.file.type != "image/jpeg" && event.file.type != "image/bmp") {
             return false;
         }
         let ftype;
         if (event.file.type == "image/png") {
             ftype = ".png";
         }
         if (event.file.type == "image/jpeg") {
             ftype = ".jpeg";
         }
         if (event.file.type == "image/bmp") {
             ftype = ".bmp"
         }
         Object.defineProperty(event.file, 'name', {
             writable: true,
             value: "qs" + ftype
         });

     });


 }




 function eselect(ev, qid) {
     let selected = ev.type;
     window.quill1 = "";
     window.quill2 = "";
     window.quill3 = "";
     window.quill4 = "";
     window.quill5 = "";
     $("#err").html("");
     $(".maincont").html(`<div class="showq"><div class="selectedcontent"></div></div>`)
     let container = $(".selectedcontent");
     container.html("");

     if (selected == 'single') {
         let i = 1;
         container.html(`
				<div class="etykieta f25"><i class="fas fa-info icon_mg"></i> Edytowanie pytania</div><br>		 
                <div class="quest-info">
                <label  for="name" class="etykieta">Etykieta pytania</label><br>
                <input value="` + ev.name + `" id="singlename" type="text" name="name" class="question">  <br>
                <label for="points" class="etykieta">Ilość punktów za pytanie</label><br>
                <input value="` + ev.points + `" id="numberofpoints" type="number" class="question"> <br> 
				<label  for="name" class="etykieta">Treść pytania</label><br><br>				
                <div id="singlecontent">` + ev.content + `
                </div></div>
				<div class="etykieta f25"><i class="far fa-clone icon_mg"></i> Możliwe odpowiedzi</div><br>
				<div class="quest-info">
                <div class="num firstans">
                <label class="a" for="single1"><input id="single1" type="radio" value="1" name="ans" class="icon_mg radio-c" ><span class="checkmark"></span>Pierwsza odpowiedź</label>
                <div id="single1ans">` + ev.option[0] + `
                </div>                
                </div>
                
                <div class="num secondans">
                <label class="a mg30" for="single2"><input id="single2" type="radio" value="2" name="ans" class="icon_mg radio-c" ><span class="checkmark"></span>Druga odpowiedź</label>
                <div id="single2ans">` + ev.option[1] + `
                </div>
                </div>
                ` + (ev.option[2] ? `<div class="num thirdans">
                <label class="a mg30" for="single3"><input id="single3" type="radio" value="3" name="ans" class="icon_mg radio-c" ><span class="checkmark"></span>Trzecia odpowiedź<button onclick="del(this)" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label>   
                <div id="single3ans">` + ev.option[2] + `
                </div>
                </div>` : '') +
             (ev.option[3] ? `<div class="num fourthans">
                <label class="a mg30" for="single4"><input id="single4" type="radio" value="4" name="ans" class="icon_mg radio-c" ><span class="checkmark"></span>Czwarta odpowiedź<button onclick="del(this)" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label> 
                <div id="single4ans">` + ev.option[3] + `
                </div>
                </div>` : '') + `
                
                <button id='possibility' onclick="addpossibility()" class="link-button f300">Dodaj możliwą odpowiedź</button>
				</div>
                <input type="file" id="siofu_input" style="display:none;"/>
				<div id='qimg'>` + (ev.zdj ? `<img src="` + ev.zdj + `" alt=""><button  class="remove-img" onclick="deleteimage()"><i class="fas fa-trash icon_mg fontg_red"></i> Usuń obraz</button>` : "") + ` </div>
                <label class="etykieta mg30 f25 pointer" for="siofu_input"><i class="fas fa-cloud-upload-alt icon_mg"></i> Wybierz plik</label><br>
                <span>Możliwe rozszerzenia: png, jpg, jpeg, bmp, pdf </span><br>
                <button onclick="addsingle('edit','` + qid + `')" class="add-button">Zapisz</button> <div id="err"></div>`);
         $(`input[name='ans']`)[$.inArray(ev.correct[0], ev.option)].checked = true;
         quil1("singlecontent");
         quil2("single1ans");
         quil3("single2ans");
         quil4("single3ans");
         quil5("single4ans");
         quilleditor();

     } else if (selected == 'multi') {
         container.html(`
				<div class="etykieta f25"><i class="fas fa-info icon_mg"></i> Edytowanie pytania</div><br>
				<div class="quest-info">		 
                <label  for="name" class="etykieta">Etykieta pytania</label><br>
                <input value="` + ev.name + `" id="multiname" type="text" name="name" class="question"><br>
                <label for="points" class="etykieta">Ilość punktów za pytanie</label><br>
                <input value="` + ev.points + `" id="numberofpoints" type="number" class="question"> <br>             
                <label  for="name" class="etykieta">Treść pytania</label><br><br>
				<div id="multicontent">` + ev.content + `
                </div></div>
				<br>
				<div class="etykieta f25"><i class="far fa-clone icon_mg"></i> Możliwe odpowiedzi</div><br>
				<div class="quest-info">
                <div class="num firstans">
                <label class="a" for="multi1"><input id="multi1" type="checkbox" value="1" name="ans" class="icon_mg radio-c" ><span class="checkmark"></span>Pierwsza odpowiedź</label>
                <div id="multi1ans">` + ev.option[0] + `
                </div>                
                </div>
                
                <div class="num secondans">
                <label class="a mg30" for="multi2"><input id="multi2" type="checkbox" value="2" name="ans" class="icon_mg radio-c" ><span class="checkmark"></span>Druga odpowiedź</label>
                <div id="multi2ans">` + ev.option[1] + `    
                </div>
                </div>
                ` + (ev.option[2] ? `<div class="num thirdans">
                <label class="a mg30" for="multi3"><input id="multi3" type="checkbox" value="3" name="ans" class="icon_mg radio-c" ><span class="checkmark"></span>Trzecia odpowiedź<button onclick="del(this)" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label>
                <div id="multi3ans">` + ev.option[2] + `
                </div>                
                </div>` : "") + (ev.option[3] ? `<div class="num fourthans">
                <label class="a mg30" for="multi4"><input id="multi4" type="checkbox" value="4" name="ans" class="icon_mg radio-c" ><span class="checkmark"></span>Czwarta odpowiedź<button onclick="del(this)" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label>
                <div id="multi4ans">` + ev.option[3] + `
                </div>                
                </div>` : "") + `
				</div>

                    
                <button id='possibility' onclick="addpossibility1()" class="link-button f300">Dodaj możliwą odpowiedź</button><br>
                <input type="file" id="siofu_input" style="display:none;"/>
				<div id='qimg'>` + (ev.zdj ? `<img src="` + ev.zdj + `" alt=""><button  class="remove-img" onclick="deleteimage()"><i class="fas fa-trash icon_mg fontg_red"></i> Usuń obraz</button>` : "") + `</div><div>
				<div id='qimg'>` + (ev.zdj ? `<img src="` + ev.zdj + `" alt=""><button  class="remove-img" onclick="deleteimage()"><i class="fas fa-trash icon_mg fontg_red"></i> Usuń obraz</button>` : "") + `</div><div>
                <label class="etykieta mg30 f25 pointer" for="siofu_input"><i class="fas fa-cloud-upload-alt icon_mg"></i> Wybierz plik</label><br>
                <span>Możliwe rozszerzenia: png, jpg, jpeg, bmp, pdf </span><br>
                <button onclick="addmulti('edit','` + qid + `')" class="add-button">Zapisz</button> <div id="err"></div>`);
         ev.option.forEach((option,i)=>{
             let inputpos = $.inArray(option,ev.correct)
             if(inputpos!=-1){
                  $(`input[name='ans']`)[i].checked = true;
             }
         })
         quil1("multicontent");
         quil2("multi1ans");
         quil3("multi2ans");
         quil4("multi3ans");
         quil5("multi4ans");
         quilleditor();
     } else if (selected == 'open') {
         container.html(`
				<div class="etykieta f25"><i class="fas fa-info icon_mg"></i> Edytowanie pytania</div><br>
				<div class="quest-info">
				<label  for="name" class="etykieta">Etykieta pytania</label><br>
                <input value="` + ev.name + `" id="openname" type="text" name="name" class="question"><br>
				<label for="points" class="etykieta">Ilość punktów za pytanie</label><br>
                <input value="` + ev.points + `" id="numberofpoints" type="number" class="question"> <br>
                </div>
				<div class="etykieta f25"><i class="far fa-clone icon_mg"></i> Treść pytania</div><br>
				<div class="quest-info">
				<div id="opencontent">` + ev.content + ` </div></div>
				
                <input type="file" id="siofu_input" style="display:none;"/>
				<div id='qimg'>` + (ev.zdj ? `<img src="` + ev.zdj + `" alt=""><button  class="remove-img" onclick="deleteimage()"><i class="fas fa-trash icon_mg fontg_red"></i> Usuń obraz</button>` : "") + ` </div>
                <label class="etykieta mg30 f25 pointer" for="siofu_input"><i class="fas fa-cloud-upload-alt icon_mg"></i> Wybierz plik</label><br>
                <span>Możliwe rozszerzenia: png, jpg, jpeg, bmp, pdf </span><br>
                <button onclick="addopen('edit','` + qid + `')" class="add-button">Zapisz</button> <div id="err"></div>`);
         quil1("opencontent");
     } else if (selected == "match") {
         console.log(ev)
         container.html(` 
                <div class="etykieta f25" style="margin-top:40px;"><i class="fas fa-info icon_mg"></i> Informacje o pytaniu</div><br>
				<div class="quest-info">
                <label  for="name" class="etykieta">Etykieta pytania</label><br>
                <input id="matchname" value="` + ev.name + `" type="text" name="name" class="question"><br>
				<label  for="points" class="etykieta">Ilość punktów za pytanie</label><br>
                <input value="` + ev.points + `" id="numberofpoints" type="number" class="question"> <br>   
                <label class="etykieta" style="display:block;">Treść pytania</label><br>				
                <div id="matchcontent">` + ev.content + `
                </div></div>
				<br>
				<div class="etykieta f25"><i class="far fa-clone icon_mg"></i> Możliwe odpowiedzi</div><br>
				<div id='matchall' class="quest-info">
				<div class="column-quest">
					<div class="column-questl">
						<div class="num firstans">
						<label class="a" for="match1">Pierwsza odpowiedź</label>
						<div id="match1">` + ev.option[0] + `</div>
						</div>
					</div>
					<div class="column-questl2">
						<i class="fas fa-long-arrow-alt-right"></i>
					</div>
					<div class="column-questr">
						<label class="a" for="match1">Dopasowanie do pierwszej odpowiedzi</label>
						<div id="match1ans" class="question">` + ev.correct[0] + `</div>
						
					</div>
				</div>
				
				<div class="column-quest" style="margin-top:30px;">
					<div class="column-questl">
						<div class="num secondans">
						<label class="a" for="match2">Druga odpowiedź</label>
						<div id="match2">` + ev.option[1] + `</div>
						</div>
					</div>
					<div class="column-questl2">
						<i class="fas fa-long-arrow-alt-right"></i>
					</div>
					<div class="column-questr">
						<label class="a" for="match2">Dopasowanie do drugiej odpowiedzi</label>
						<div id="match2ans" class="question">` + ev.correct[1] + `</div>
						
					</div>
				</div>
                ` + (ev.option[2] ? `<div class="column-quest col3">
					<div class="column-questl">
						<div class="num thirdans">
						<label class="a" for="match3">Trzecia odpowiedź                <button onclick="del(this,'match')" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label>
						<div id="match3">` + ev.option[2] + `</div>
						</div>
					</div>
					<div class="column-questl2">
						<i class="fas fa-long-arrow-alt-right"></i>
					</div>
					<div class="column-questr">
						<label class="a" for="match3">Dopasowanie do trzeciej odpowiedzi</label>
						<div id="match3ans" class="question">` + ev.correct[2] + `</div>
						
					</div>

				</div>` : "") + (ev.option[3] ? `<div class="column-quest col4">
					<div class="column-questl">
						<div class="num fourthans">
						<label class="a" for="match4">Czwarta odpowiedź                <button onclick="del(this,'match')" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label>
						<div id="match4">` + ev.option[3] + `</div>
						</div>
					</div>
					<div class="column-questl2">
						<i class="fas fa-long-arrow-alt-right"></i>
					</div>
					<div class="column-questr">
						<label class="a" for="match4">Dopasowanie do czwartej odpowiedzi</label>
						<div id="match4ans" class="question">` + ev.correct[3] + `</div>
						
					</div>

				</div>` : "") + (ev.option[4] ? `<div class="column-quest col5">
					<div class="column-questl">
						<div class="num fifthans">
						<label class="a" for="match5">Piąta odpowiedź                <button onclick="del(this,'match')" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label>
						<div id="match5">` + ev.option[4] + `</div>
						</div>
					</div>
					<div class="column-questl2">
						<i class="fas fa-long-arrow-alt-right"></i>
					</div>
					<div class="column-questr">
						<label class="a" for="match5">Dopasowanie do piątej odpowiedzi</label>
						<div id="match5ans" class="question">` + ev.correct[4] + `</div>
						
					</div>

				</div>` : "") + (ev.option[5] != null ? `<div class="column-quest col6">
					<div class="column-questl">
						<div class="num sixthans">
						<label class="a" for="match6">Szósta odpowiedź <button onclick="del(this,'match')" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label>
						<div id="match6">` + ev.option[5] + `</div>
						</div>
					</div>
					<div class="column-questl2">
						<i class="fas fa-long-arrow-alt-right"></i>
					</div>
					<div class="column-questr">
						<label class="a" for="match6">Dopasowanie do szóstej odpowiedzi</label>
						<div id="match6ans" class="question">` + ev.correct[5] + `</div>
						
					</div>

				</div>` : "") +(ev.fake ?  (ev.fake.typ == 'fakeans' ? `<div class="fakeans">
                <label class="a" for="fakeans">Fałszywa odpowiedź</label>
                <div id="fakeansquil">` + ev.fake.content + `</div>
                </div>` : "") + (ev.fake.typ == 'fakematch' ? `<div class="fakematch">
                <label class="a" for="fakematch">Fałszywe dopasowanie</label>
                <div id="fakematchquil">` + ev.fake.content + `</div>
                </div>` : ""): "") + `
                </div>

                </div>
				<br>
                <button id='possibility' onclick="addpossibility2()" class="link-button f300">Dodaj możliwą odpowiedź</button><br>                
                <button id='fakeans' onclick="fake(this)" class="link-button f300">Dodaj fałszywą odpowiedź</button><br>                
                <button id='fakematch' onclick="fake(this)" class="link-button f300">Dodaj fałszywe dopasowanie</button><br>
                <input type="file" id="siofu_input" style="display:none;"/>
                <label class="etykieta mg30 f25 pointer" for="siofu_input"><i class="fas fa-cloud-upload-alt icon_mg"></i> Wybierz plik</label><br>
				<div id='qimg'> </div>
                <span>Możliwe rozszerzenia: png, jpg, jpeg, bmp, pdf </span><br>
                <button onclick="addmatch('edit','` + qid + `')" class="add-button">Zapisz</button> <div id="err"></div>`);
         quil1("matchcontent");
         quil2("match1");
         quil3("match1ans");
         quil4("match2");
         quil5("match2ans");
         quil6("match3")
         quil7("match3ans")
         quil8("match4");
         quil9("match4ans");
         quil10("match5");
         quil11("match5ans");
         quil12("match6");
         quil13("match6ans");
         quil14('fakematchquil');
         quil15('fakeansquil');
         quilleditor();
     }
     //         else if (selected == 'chapter') {
     //         container.html(`<div><label  for="name" class="f200 f30">Nazwa rodziału</label><br>
     //                <input id="chaptername" type="text" name="name" class="question">         
     //               </div> <div><label for="content" class="f200 f30">Opis rodziału</label><br>
     //                <input id="chaptercontent" type="text" name="content" class="question"></div>
     //                <button onclick="addchapter()" class="add-button">Dodaj</button> <div id="err"></div>`)
     //     }

     let src;
     var uploader = new SocketIOFileUpload(socket);
     uploader.maxFileSize = 300000;
     uploader.listenOnInput(document.getElementById("siofu_input"), document.getElementById("siofu_1"));
     uploader.addEventListener("error", function (data) {
         if (data.code === 1) {
             alert("Don't upload such a big file");
         }
     });
     uploader.addEventListener("start", function (event) {
         if (event.file.type != "image/png" && event.file.type != "image/jpeg" && event.file.type != "image/bmp") {
             return false;
         }
     });
 }





 function fake(e) {
     if (e.id == "fakematch") {
         $('.fakeans').remove();
         $(".fakematch").remove()
         $("#matchall").append(`
						<div class="fakematch">
						<label class="a" for="fakematch">Fałszywe dopasowanie</label>
						<div id="fakematchquil"></div>
						</div>`);
         quil14('fakematchquil');
     } else if (e.id == "fakeans") {
         $(".fakematch").remove();
         $('.fakeans').remove();
         $("#matchall").append(`
						<div class="fakeans">
						<label class="a" for="fakeans">Fałszywa odpowiedź</label>
						<div id="fakeansquil"></div>
						</div>`);
         quil15('fakeansquil');

     }
 }



 function addpossibility2() {
     let num = $(".num").length;

     if (num == 2) {
         $(`<div class="column-quest col3">
					<div class="column-questl">
						<div class="num thirdans">
						<label class="a" for="match3">Trzecia odpowiedź                <button onclick="del(this,'match')" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label>
						<div id="match3"></div>
						</div>
					</div>
					<div class="column-questl2">
						<i class="fas fa-long-arrow-alt-right"></i>
					</div>
					<div class="column-questr">
						<label class="a" for="match3">Dopasowanie do trzeciej odpowiedzi</label>
						<div id="match3ans" class="question"></div>
						
					</div>

				</div>`).insertBefore('button#possibility')
         quil6("match3");
         quil7("match3ans");
         quilleditor();
     }
     if (num == 3) {
         $(`<div class="column-quest col4">
					<div class="column-questl">
						<div class="num fourthans">
						<label class="a" for="match4">Czwarta odpowiedź                <button onclick="del(this,'match')" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label>
						<div id="match4"></div>
						</div>
					</div>
					<div class="column-questl2">
						<i class="fas fa-long-arrow-alt-right"></i>
					</div>
					<div class="column-questr">
						<label class="a" for="match4">Dopasowanie do czwartej odpowiedzi</label>
						<div id="match4ans" class="question"></div>
						
					</div>

				</div>`).insertBefore('button#possibility')
         quil8("match4");
         quil9("match4ans");
         quilleditor();
     }
     if (num == 4) {
         $(`<div class="column-quest col5">
					<div class="column-questl">
						<div class="num fifthans">
						<label class="a" for="match5">Piąta odpowiedź                <button onclick="del(this,'match')" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label>
						<div id="match5"></div>
						</div>
					</div>
					<div class="column-questl2">
						<i class="fas fa-long-arrow-alt-right"></i>
					</div>
					<div class="column-questr">
						<label class="a" for="match5">Dopasowanie do piątej odpowiedzi</label>
						<div id="match5ans" class="question"></div>
						
					</div>

				</div>`).insertBefore('button#possibility')
         quil10("match5");
         quil11("match5ans");
         quilleditor();
     }
     if (num == 5) {
         $(`<div class="column-quest col6">
					<div class="column-questl">
						<div class="num sixthans">
						<label class="a" for="match6">Szósta odpowiedź <button onclick="del(this,'match')" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label>
						<div id="match6"></div>
						</div>
					</div>
					<div class="column-questl2">
						<i class="fas fa-long-arrow-alt-right"></i>
					</div>
					<div class="column-questr">
						<label class="a" for="match6">Dopasowanie do szóstej odpowiedzi</label>
						<div id="match6ans" class="question"></div>
						
					</div>

				</div>`).insertBefore('button#possibility')
         quil12("match6");
         quil13("match6ans");
         quilleditor();
     }
 }


 function addpossibility() {
     let num = $(".num").length;
     if (num == 2) {
         $(`   	
				<div class="num thirdans">
                <label class="a mg30" for="single3"><input id="single3" type="radio" value="3" name="ans" class="radio-c" checked><span class="checkmark"></span>Trzecia odpowiedź
                <button onclick="del(this)" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label>
                <div id="single3ans">
                </div>                
                </div>`).insertBefore('button#possibility');
         quil4("single3ans");
         quilleditor();
     }
     if (num == 3) {
         $(`    <div class="num fourthans">
                <label class="a mg30" for="single4"><input id="single4" type="radio" value="4" name="ans" class="radio-c" checked><span class="checkmark"></span>Czwarta odpowiedź
                <button onclick="del(this)" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label>
                <div id="single4ans">
                </div>                
                </div>`).insertBefore('button#possibility');
         quil5("single4ans");
         quilleditor();
     }
 }

 function addpossibility1() {
     let num = $(".num").length;
     if (num == 2) {
         $(`                <div class="num thirdans">
                <label class="a" for="multi3"><input id="multi3" type="checkbox" value="3" name="ans" checked>Trzecia odpowiedź                <button onclick="del(this)" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label>
                <div id="multi3ans">
                                
                </div></div>`).insertBefore('button#possibility');
         quil4("multi3ans");
         quilleditor();
     }
     if (num == 3) {
         $(`                <div class="num fourthans">
                <label class="a" for="multi4"><input id="multi4" type="checkbox" value="4" name="ans" checked>Czwarta odpowiedź                <button onclick="del(this)" class="del-more-answ"><span class="del-qst"><i class="fas fa-times icon_mg"></i> Usuń pytanie</span></button></label>
                <div id="multi4ans">
                </div>                
                </div>`).insertBefore('button#possibility');
         quil5("multi4ans");
         quilleditor();
     }
 }

 function del(e, type) {
     let num = $(".num").length
     if (type == "match") {
         if (num == 3 && e.parentElement.parentElement.className.includes("thirdans")) {
             $(".col3").remove();
         }
         if (num == 4 && e.parentElement.parentElement.className.includes("thirdans")) {
             window.quill6.container.firstChild.innerHTML = window.quill8.container.firstChild.innerHTML;
             window.quill7.container.firstChild.innerHTML = window.quill9.container.firstChild.innerHTML;
             $(".col4").remove();
         }
         if (num == 4 && e.parentElement.parentElement.className.includes("fourthans")) {
             $(".col4").remove();
         }
         if (num == 5 && e.parentElement.parentElement.className.includes("thirdans")) {
             window.quill6.container.firstChild.innerHTML = window.quill8.container.firstChild.innerHTML;
             window.quill7.container.firstChild.innerHTML = window.quill9.container.firstChild.innerHTML;
             window.quill8.container.firstChild.innerHTML = window.quill10.container.firstChild.innerHTML;
             window.quill9.container.firstChild.innerHTML = window.quill11.container.firstChild.innerHTML;
             $(".col5").remove();
         }
         if (num == 5 && e.parentElement.parentElement.className.includes("fourthans")) {
             window.quill8.container.firstChild.innerHTML = window.quill10.container.firstChild.innerHTML;
             window.quill9.container.firstChild.innerHTML = window.quill11.container.firstChild.innerHTML;
             $(".col5").remove();
         }
         if (num == 5 && e.parentElement.parentElement.className.includes("fifthans")) {
             $(".col5").remove();
         }

         if (num == 6 && e.parentElement.parentElement.className.includes("thirdans")) {
             window.quill6.container.firstChild.innerHTML = window.quill8.container.firstChild.innerHTML;
             window.quill7.container.firstChild.innerHTML = window.quill9.container.firstChild.innerHTML;
             window.quill8.container.firstChild.innerHTML = window.quill10.container.firstChild.innerHTML;
             window.quill9.container.firstChild.innerHTML = window.quill11.container.firstChild.innerHTML;
             window.quill10.container.firstChild.innerHTML = window.quill12.container.firstChild.innerHTML;
             window.quill11.container.firstChild.innerHTML = window.quill13.container.firstChild.innerHTML;
             $(".col6").remove();
         }

         if (num == 6 && e.parentElement.parentElement.className.includes("fourthans")) {
             window.quill8.container.firstChild.innerHTML = window.quill10.container.firstChild.innerHTML;
             window.quill9.container.firstChild.innerHTML = window.quill11.container.firstChild.innerHTML;
             window.quill10.container.firstChild.innerHTML = window.quill12.container.firstChild.innerHTML;
             window.quill11.container.firstChild.innerHTML = window.quill13.container.firstChild.innerHTML;
             $(".col6").remove();
         }
         if (num == 6 && e.parentElement.parentElement.className.includes("fifthans")) {
             window.quill10.container.firstChild.innerHTML = window.quill12.container.firstChild.innerHTML;
             window.quill11.container.firstChild.innerHTML = window.quill13.container.firstChild.innerHTML;
             $(".col6").remove();
         }
         if (num == 6 && e.parentElement.parentElement.className.includes("sixthans")) {
             $(".col6").remove();
         }


     } else {

         if (num == 4 && e.parentElement.parentElement.className.includes("thirdans")) {
             window.quill4.container.firstChild.innerHTML = window.quill5.container.firstChild.innerHTML;
             if($(".fourthans label input")[0].checked==true){
                 $(".thirdans label input")[0].checked=true;
                 console.log('tr')
             }else{
                 $(".thirdans label input")[0].checked=false;
                console.log('fl')

             }
             $(".fourthans").remove();
             
         } else if (num == 3 && e.parentElement.parentElement.className.includes("thirdans")) {
             $(".thirdans").remove();
         } else if (num == 4 && e.parentElement.parentElement.className.includes("fourthans")) {
             $(".fourthans").remove();
         }
     }
 }

 function deleteimage() {
     $("#qimg").html("");
 }

 var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],

        [{
         'header': 1
        }, {
         'header': 2
        }], // custom button values
        [{
         'list': 'ordered'
        }, {
         'list': 'bullet'
        }],
        [{
         'script': 'sub'
        }, {
         'script': 'super'
        }], // superscript/subscript
        [{
         'indent': '-1'
        }, {
         'indent': '+1'
        }], // outdent/indent
        [{
         'direction': 'rtl'
        }], // text direction

        [{
         'size': ['small', false, 'large', 'huge']
        }], // custom dropdown
        [{
         'header': [1, 2, 3, 4, 5, 6, false]
        }],

        [{
         'color': []
        }, {
         'background': []
        }], // dropdown with defaults from theme
        [{
         'font': []
        }],
        [{
         'align': []
        }], ['link', 'image', 'video', 'formula'],

        ['clean'] // remove formatting button
    ];



 function quilleditor() {
     let x = 0;
     let xi = 0;
     $(".ql-toolbar").each(function () {
         x++
         this.id = "quil" + x
     })
     $(".ql-editor").each(function () {
         xi++
         this.id = "uil" + xi;

     })
 }



 function quil1(e) {
     var cont = document.getElementById(e)
     window.quill1 = new Quill(cont, {
         modules: {
             toolbar: toolbarOptions
         },
         theme: 'snow'
     });
 }

 function quil2(e) {
     var cont = document.getElementById(e)
     window.quill2 = new Quill(cont, {
         modules: {
             toolbar: toolbarOptions
         },
         theme: 'snow'
     });
 }

 function quil3(e) {
     var cont = document.getElementById(e)
     window.quill3 = new Quill(cont, {
         modules: {
             toolbar: toolbarOptions
         },
         theme: 'snow'
     });
 }

 function quil4(e) {
     var cont = document.getElementById(e)
     window.quill4 = new Quill(cont, {
         modules: {
             toolbar: toolbarOptions
         },
         theme: 'snow'
     });
 }

 function quil5(e) {
     var cont = document.getElementById(e)
     window.quill5 = new Quill(cont, {
         modules: {
             toolbar: toolbarOptions
         },
         theme: 'snow'
     });
 }

 function quil6(e) {
     var cont = document.getElementById(e)
     window.quill6 = new Quill(cont, {
         modules: {
             toolbar: toolbarOptions
         },
         theme: 'snow'
     });
 }

 function quil7(e) {
     var cont = document.getElementById(e)
     window.quill7 = new Quill(cont, {
         modules: {
             toolbar: toolbarOptions
         },
         theme: 'snow'
     });
 }

 function quil8(e) {
     var cont = document.getElementById(e)
     window.quill8 = new Quill(cont, {
         modules: {
             toolbar: toolbarOptions
         },
         theme: 'snow'
     });
 }

 function quil9(e) {
     var cont = document.getElementById(e)
     window.quill9 = new Quill(cont, {
         modules: {
             toolbar: toolbarOptions
         },
         theme: 'snow'
     });
 }

 function quil10(e) {
     var cont = document.getElementById(e)
     window.quill10 = new Quill(cont, {
         modules: {
             toolbar: toolbarOptions
         },
         theme: 'snow'
     });
 }

 function quil11(e) {
     var cont = document.getElementById(e)
     window.quill11 = new Quill(cont, {
         modules: {
             toolbar: toolbarOptions
         },
         theme: 'snow'
     });
 }

 function quil12(e) {
     var cont = document.getElementById(e)
     window.quill12 = new Quill(cont, {
         modules: {
             toolbar: toolbarOptions
         },
         theme: 'snow'
     });
 }

 function quil13(e) {
     var cont = document.getElementById(e)
     window.quill13 = new Quill(cont, {
         modules: {
             toolbar: toolbarOptions
         },
         theme: 'snow'
     });
 }

 function quil14(e) {
     var cont = document.getElementById(e)
     window.quill14 = new Quill(cont, {
         modules: {
             toolbar: toolbarOptions
         },
         theme: 'snow'
     });
 }

 function quil15(e) {
     var cont = document.getElementById(e)
     window.quill15 = new Quill(cont, {
         modules: {
             toolbar: toolbarOptions
         },
         theme: 'snow'
     });
 }
