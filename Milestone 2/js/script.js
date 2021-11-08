const panels = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];



const container = document.getElementById('container');
console.log('container', container)
let html = '';

const select = document.getElementById('select')
console.log('select',select)

console.log(select[1].innerHTML)
console.log(select[2].innerHTML)
console.log(select[3].innerHTML)
console.log('panel',panels)

let panel
generatePanels(panel, panels)

const selectElement = document.querySelector('.form-select');

selectElement.addEventListener('change', (event) => {
	
	console.log('-------- container',container)
	
	console.log('hai selezionato ',event.target.value)

	if (event.target.value === '1'){

		const animal = panels.filter(( panel => {
	
			if(panel.type == 'animal'){
				return true
			}
			return false
			
		}))
		console.log('nuovo array animals', animal)

		
		let an
		generatePanels(an, animal)
	
	}

	if (event.target.value === '2'){
		

		const vegetable = panels.filter(( panel => {
	
			if(panel.type == 'vegetable'){
				return true
			}
			return false
			
		}))
		console.log('nuovo array vegetable', vegetable)

		// document.querySelector('main').innerHTML = '';
		let veg

		generatePanels(veg, vegetable)
	
	}

	if (event.target.value === '3'){
		

		const users = panels.filter(( panel => {
	
			if(panel.type == 'user'){
				return true
			}
			return false
			
		}))
		console.log('nuovo array vegetable', users)

		// document.querySelector('main').innerHTML = '';
		let user

		generatePanels(user, users)
	
	}


});







function generatePanels(panel, panels){

	container.innerHTML= '';

	for (let panel of panels){
  const name = panel.name;
  const prefix = panel.prefix;
  const type = panel.type;
  const family = panel.family;
  const color = panel.color;

  html += `

    <div class="panel">
      <div class="image">
        <i class="${family} ${prefix}${name}" style="color:${color}"></i>
      </div>
      <div class="text">
        <span>${name}</span>
      </div>
    </div>
  </div>
</div>`


} 
container.innerHTML += html;

}

