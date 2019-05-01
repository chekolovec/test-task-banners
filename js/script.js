var timeend= new Date(2019, 4, 4);
// IE и FF по разному отрабатывают getYear()
// timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);
// для задания обратного отсчета до определенной даты укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ);
// Для задания даты с точностью до времени укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ-1, МИНУТЫ);
function time() {
	var today = new Date();
	today = Math.floor((timeend-today)/1000);
	var tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
	var tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
	today=Math.floor(today/24);
	var thour=today%24 + today*24;

	document.getElementById('hours-left').innerHTML=thour;
	document.getElementById('minutes-left').innerHTML=tmin;
	document.getElementById('seconds-left').innerHTML=tsec;
	window.setTimeout("time()",500);
}

time();