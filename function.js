const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
$.ajax({
    type: 'get',
    url: 'https://api.covid19api.com/summary',
    success: function(response){
        console.log(response);
        for(let i=0;i<response.Countries.length; i++){

            let totalactive = (response.Countries[i].TotalConfirmed-response.Countries[i].TotalDeaths) ;
            let tablerow = `<tr>
            <td>${response.Countries[i].Country}</td>
            <td>${response.Countries[i].TotalConfirmed}</td>
            <td>${response.Countries[i].TotalRecovered}</td>
            <td>${totalactive}</td>
            <td>${response.Countries[i].TotalDeaths}</td>
            </tr>`;
            $('#tbody').append(tablerow);

        }
        $('#covidtable').DataTable( {
            responsive: true
        } );
        // $('#covidtable').DataTable();
    },
    error: function(error){
        console.log(error);
    }
})

