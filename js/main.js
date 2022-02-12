const arrow = document.querySelectorAll(".arrow");
const sidebar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".bx-menu");

for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;

    arrowParent.classList.toggle("showMenu");
  });
}

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});


const getButton = document.querySelectorAll('.get-booking');
const modal = document.querySelector('.modal');
const ModalClose = document.querySelector('.header-modal__close');




getButton.forEach(function(item){
	
	item.addEventListener('click', () => {
    modal.classList.toggle('active');     
  });
	ModalClose.addEventListener('click', () => {
	modal.classList.remove('active');
		});
	
});

const linkTo = document.querySelectorAll(".link-to");
const card = document.querySelector('.card');

const active = document.querySelector('.active');

		
linkTo.forEach(function(item){
	item.addEventListener('click', () => {
		
		card.classList.toggle('active');
	     
	 });

		
});






