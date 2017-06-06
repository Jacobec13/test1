function main() {
	string = "@Москва $#Питер $%Самолёт $&Боинг $&Место у окна $$@Подольск $#Москва $%Автобус $&Номер 15 $$@Питер $#Хельсинки $%Поезд $&Номер 20 $&Плацкарт $&Полка сверху";
	document.querySelector("#output").innerHTML = cards(string);
	console.log(cards(string));
}