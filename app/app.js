var app = angular.module('app', ['akoenig.deckgrid']);

app.controller('MainCtrl', function($scope) {

    $scope.photos = [
        {
        	id: 'photo-1', 
        	name: 'Awesome photo', 
        	src: 'http://localhost:8080/assets/images/nature-1.jpg',
        	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit recusandae, distinctio blanditiis consequuntur eaque voluptas dolor fuga sit minima, culpa ratione debitis commodi nesciunt totam? Sed dolorum nihil perferendis vero.'
        },
        {
        	id: 'photo-2', 
        	name: 'Great photo', 
        	src: 'http://localhost:8080/assets/images/abstract-1.jpg',
        	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, minus aperiam eaque nam cupiditate doloribus, nemo quo expedita quisquam consectetur placeat fuga sapiente porro laboriosam in molestiae quas error? Natus.'
        },
        {
        	id: 'photo-3', 
        	name: 'Strange photo', 
        	src: 'http://localhost:8080/assets/images/abstract-2.jpg',
        	description: '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit placeat consequatur aperiam voluptatem ex, nostrum sunt ad incidunt suscipit doloremque voluptatum deleniti natus, sequi aliquid, porro deserunt ducimus molestiae! Pariatur?</div><div>Debitis voluptatibus quam, cum voluptatem, vel sapiente similique architecto. Perferendis maxime accusantium veniam delectus dolores, natus quasi tenetur, obcaecati doloribus magni quae tempore ea, consectetur nisi quibusdam cupiditate. Repudiandae, eaque.</div>'
        },
        {
        	id: 'photo-4', 
        	name: 'A photo?', 
        	src: 'http://localhost:8080/assets/images/sports-1.jpg'
        },
        {
        	id: 'photo-5', 
        	name: 'What a photo', 
        	src: 'http://localhost:8080/assets/images/sports-2.jpg'
        },
        {
        	id: 'photo-6', 
        	name: 'Awesome photo', 
        	src: 'http://localhost:8080/assets/images/nature-1.jpg'
        },
        {
        	id: 'photo-7', 
        	name: 'Great photo', 
        	src: 'http://localhost:8080/assets/images/abstract-1.jpg'
        },
        {
        	id: 'photo-8', 
        	name: 'Strange photo', 
        	src: 'http://localhost:8080/assets/images/abstract-2.jpg'
        }
    ];
});