'use strict';

let myDataRef = new Firebase('https://sweltering-heat-6643.firebaseio.com/');


$('#submitButton').on('click', function() {
	let name = $('#nameInput').val();
	let organization = $('#organizationInput').val();
	let contact_number = $('#contactNumberInput').val();
	
	myDataRef.push(
		{
			name: name,
			organization: organization,
			contact_number: contact_number
		}
	);

	$('#nameInput').val('');
	$('#organizationInput').val('');
	$('#contactNumberInput').val('');
});


myDataRef.on('child_added', function(snapshot) {
	let guest = snapshot.val();
	appendToList(guest.name, guest.organization, guest.contact_number);
});


function appendToList(name, organization, contact_number) {
	var template = ['<div class="row">',
	                	'<div class="col s12">',
		                    '<div class="col s4" style="margin: 0;">',
		                        '<span>',
		                        name,
		                        '</span>',
		                   ' </div>',
		                    '<div class="col s4" style="margin: 0;">',
		                        '<span>',
		                        organization,
		                        '</span>',
		                    '</div>',
		                    '<div class="col s4" style="margin: 0;">',
		                        '<span>',
		                        contact_number,
		                        '</span>',
		                    '</div>',
	                	'</div>',
            		'</div>'].join('');
	
	$('#mainDataDiv').append(template);
};
