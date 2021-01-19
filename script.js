function CreateBook(){
	class Contacts {
		constructor(data){
			this.name = data.name;
			this.phone = data.phone;
			this.email = data.email;
		};

	get info(){
		return [this.name, this.phone, this.email];
	};

	set info(data){
		this.name = data.name;
		this.phone = data.phone;
		this.email = data.email;
	};

	};

	class App extends Contacts{
		add(value1, value2, value3){ 
			let newUser = {
				ul: document.querySelector('ul'),
				li: document.createElement('li'),
				userName: document.createElement('p'),
				userPhone: document.createElement('p'),
				userEmail: document.createElement('p'),
				onDelete: document.createElement('button'),
				onEdit: document.createElement('button'),
			};

				newUser.ul.appendChild(newUser.li);
				newUser.li.appendChild(newUser.userName);
				newUser.li.appendChild(newUser.userPhone);
				newUser.li.appendChild(newUser.userEmail);
				newUser.li.appendChild(newUser.onDelete);
				newUser.li.appendChild(newUser.onEdit);
				newUser.onDelete.classList.add('onDelete');
				newUser.onEdit.classList.add('onEdit');

				newUser.userName.innerHTML = value1;
				newUser.userPhone.innerHTML = value2;
				newUser.userEmail.innerHTML = value3;
				newUser.onDelete.innerHTML = 'Delete';
				newUser.onEdit.innerHTML = 'Edit';

				newUser.onDelete.addEventListener('click', function() {
					this.closest('li').remove();
				});

				newUser.onEdit.addEventListener('click', function() {
					newUser.userName.innerHTML = prompt('Edit your name', valueName.value);
					newUser.userPhone.innerHTML = prompt('Edit your phone', valuePhone.value);
					newUser.userEmail.innerHTML = prompt('Edit your email', valueEmail.value);
				});
			};

};
let contacts = new App('');

	let valueName = document.querySelector('input[name="name"]'),
		valuePhone = document.querySelector('input[name="phone"]'),
		valueEmail = document.querySelector('input[name="email"]'),
		btnAdd = document.querySelector('.btn_add'),
		btnDelete = document.querySelector('.btn_delete'),
		onEdit = document.querySelector('.onEdit');


	btnAdd.addEventListener('click', function() {
		let email = valueEmail.value;
		let regexp = /\S+@\S+\.\S+/;
		let valid = regexp.test(email);
		if (valid === false){
			alert('введите правильный email');
			valueEmail.value = '';
		} if (valueName.value != '' && valuePhone.value != '' && valueEmail.value != '') {
			contacts.add(valueName.value, valuePhone.value, valueEmail.value);
		} else {
			alert('Введите все данные');
		};

	});

	btnDelete.addEventListener('click', function() {
		let ul = document.querySelector('ul');
		ul.innerHTML = '';
	});

};

window.addEventListener('load', CreateBook);

