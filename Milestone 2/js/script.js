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

document.getAnimations

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

const select = document.getElementById('select')
console.log('select',select)

// const selected = select.value
// console.log('selected',selected)

console.log(select[1].innerHTML)
console.log(select[2].innerHTML)
console.log(select[3].innerHTML)
console.log('panel',panels)

for (let panel of panels){
	const type = panel.type
	console.log('type',type)

	const animal = panels.filter(( panel => {
		if (type.toLowerCase == select[1].innerHTML.toLowerCase ){
			return true
		}
		return false
		
	}))
}

// const selectElement = document.querySelector('.form-select');

// selectElement.addEventListener('change', (event) => {
//   console.log('You like', event.target.value)
// });

let type
const selectElement = document.querySelector('.form-select');

selectElement.addEventListener('change', (event) => {
  
	console.log('hai selezionato ',event.target.value)

		if (event.target.value === 1){
			let type = parseInt('animal')
		} else if (event.target.value === 2){
			let type = 'vegetable'
		} else if (event.target.value === 3){
			let type = 'user'
		}
		
		console.log(type)


});









