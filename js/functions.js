$(document).ready(() => {
  $.getJSON("./userlist.json")
  .done(function(data){
    console.log(data);
    const table = data.users.map(m => {
      return `<tr><td><i class="fas fa-check-circle"></i></td><td>${m.username} </td><td>${m.name}</td><td>${m.group}</td></tr>`
    })
    $('#tableBody').html(table);
    $('#usersTable').DataTable({
      "searching": false,
      "ordering": false
      });
    $('.dataTables_length').addClass('bs-select');
   
    
  })
  
});

