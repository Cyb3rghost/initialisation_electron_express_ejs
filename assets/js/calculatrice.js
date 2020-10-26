$( document ).ready(function() {
    
    var historique = [];

    $('#bouton7').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#bouton7').val();

        if(ecranCalcul != 0)
        {

            ecranCalcul = $('#ecranCalcul').val()
            $('#ecranCalcul').val(ecranCalcul + valeur )

        }
        else
        {
  
            $('#ecranCalcul').val(valeur)

        }

    });

    $('#bouton8').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#bouton8').val();

        if(ecranCalcul != 0)
        {

            ecranCalcul = $('#ecranCalcul').val()
            $('#ecranCalcul').val(ecranCalcul + valeur )

        }
        else
        {
  
            $('#ecranCalcul').val(valeur)

        }
        
    });

    $('#bouton9').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#bouton9').val();

        if(ecranCalcul != 0)
        {

            ecranCalcul = $('#ecranCalcul').val()
            $('#ecranCalcul').val(ecranCalcul + valeur )

        }
        else
        {
  
            $('#ecranCalcul').val(valeur)

        }
        
    });

    $('#bouton4').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#bouton4').val();

        if(ecranCalcul != 0)
        {

            ecranCalcul = $('#ecranCalcul').val()
            $('#ecranCalcul').val(ecranCalcul + valeur )

        }
        else
        {
  
            $('#ecranCalcul').val(valeur)

        }
        
    });

    $('#bouton5').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#bouton5').val();

        if(ecranCalcul != 0)
        {

            ecranCalcul = $('#ecranCalcul').val()
            $('#ecranCalcul').val(ecranCalcul + valeur )

        }
        else
        {
  
            $('#ecranCalcul').val(valeur)

        }
        
    });

    $('#bouton6').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#bouton6').val();

        if(ecranCalcul != 0)
        {

            ecranCalcul = $('#ecranCalcul').val()
            $('#ecranCalcul').val(ecranCalcul + valeur )

        }
        else
        {
  
            $('#ecranCalcul').val(valeur)

        }
        
    });

    $('#bouton1').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#bouton1').val();

        if(ecranCalcul != 0)
        {

            ecranCalcul = $('#ecranCalcul').val()
            $('#ecranCalcul').val(ecranCalcul + valeur )

        }
        else
        {
  
            $('#ecranCalcul').val(valeur)

        }
        
    });

    $('#bouton2').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#bouton2').val();

        if(ecranCalcul != 0)
        {

            ecranCalcul = $('#ecranCalcul').val()
            $('#ecranCalcul').val(ecranCalcul + valeur )

        }
        else
        {
  
            $('#ecranCalcul').val(valeur)

        }
        
    });

    $('#bouton3').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#bouton3').val();

        if(ecranCalcul != 0)
        {

            ecranCalcul = $('#ecranCalcul').val()
            $('#ecranCalcul').val(ecranCalcul + valeur )

        }
        else
        {
  
            $('#ecranCalcul').val(valeur)

        }
        
    });

    $('#bouton0').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#bouton0').val();

        if(ecranCalcul != 0)
        {

            ecranCalcul = $('#ecranCalcul').val()
            $('#ecranCalcul').val(ecranCalcul + valeur )

        }
        else
        {
  
            $('#ecranCalcul').val(valeur)

        }
        
    });

    $('#boutonXX').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#boutonXX').val();

        var index = ecranCalcul.indexOf(",");    
        if(index === -1){
            ecranCalcul = $('#ecranCalcul').val()
            $('#ecranCalcul').val(ecranCalcul + valeur )
        }
        
    });

    $('#boutonX1').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#boutonX1').val();

        var index = ecranCalcul.indexOf(["/"])
        var indexDeux = ecranCalcul.indexOf(["*"])
        var indexTrois = ecranCalcul.indexOf(["-"])
        var indexQuatre = ecranCalcul.indexOf(["+"])

        if(ecranCalcul != 0)
        {

            if(index === -1 && indexDeux === -1 && indexTrois === -1 && indexQuatre === -1)
            {

                ecranCalcul = $('#ecranCalcul').val()
                $('#ecranCalcul').val(ecranCalcul + valeur )

            }


        }
        else
        {
  
            $('#ecranCalcul').val(valeur)

        }
        
    });

    
    $('#boutonX2').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#boutonX2').val();

        var index = ecranCalcul.indexOf(["/"])
        var indexDeux = ecranCalcul.indexOf(["*"])
        var indexTrois = ecranCalcul.indexOf(["-"])
        var indexQuatre = ecranCalcul.indexOf(["+"])

        if(ecranCalcul != 0)
        {

            if(index === -1 && indexDeux === -1 && indexTrois === -1 && indexQuatre === -1)
            {

                ecranCalcul = $('#ecranCalcul').val()
                $('#ecranCalcul').val(ecranCalcul + valeur )

            }

        }
        else
        {
  
            $('#ecranCalcul').val(valeur)

        }
        
    });

    
    $('#boutonX3').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#boutonX3').val();

        var index = ecranCalcul.indexOf(["/"])
        var indexDeux = ecranCalcul.indexOf(["*"])
        var indexTrois = ecranCalcul.indexOf(["-"])
        var indexQuatre = ecranCalcul.indexOf(["+"])

        if(ecranCalcul != 0)
        {

            if(index === -1 && indexDeux === -1 && indexTrois === -1 && indexQuatre === -1)
            {

                ecranCalcul = $('#ecranCalcul').val()
                $('#ecranCalcul').val(ecranCalcul + valeur )

            }

        }
        else
        {
  
            $('#ecranCalcul').val(valeur)

        }        
    });

    
    $('#boutonX4').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#boutonX4').val();

        var index = ecranCalcul.indexOf(["/"])
        var indexDeux = ecranCalcul.indexOf(["*"])
        var indexTrois = ecranCalcul.indexOf(["-"])
        var indexQuatre = ecranCalcul.indexOf(["+"])

        if(ecranCalcul != 0)
        {

            if(index === -1 && indexDeux === -1 && indexTrois === -1 && indexQuatre === -1)
            {

                ecranCalcul = $('#ecranCalcul').val()
                $('#ecranCalcul').val(ecranCalcul + valeur )

            }

        }
        else
        {
  
            $('#ecranCalcul').val(valeur)

        }        
    });

    
    $('#boutonX5').on('click', function() {

        var ecranCalcul = $('#ecranCalcul').val()
        var valeur = $('#boutonX5').val();

        var index = ecranCalcul.indexOf("/")
        var indexDeux = ecranCalcul.indexOf("*")
        var indexTrois = ecranCalcul.indexOf("-")
        var indexQuatre = ecranCalcul.indexOf("+")

        if(ecranCalcul != 0)
        {

            if(index != -1)
            {

                var nombre = ecranCalcul.split('/');
                var calcul = nombre[0] / nombre[1]
                $('#ecranCalcul').val(calcul)
                historique.push(ecranCalcul + '=' + calcul)

            }
            else if(indexDeux != -1)
            {

                var nombre = ecranCalcul.split('*');
                var calcul = nombre[0] * nombre[1]
                $('#ecranCalcul').val(calcul)
                historique.push(ecranCalcul + '=' + calcul)

            }
            else if(indexTrois != -1)
            {

                var nombre = ecranCalcul.split('-');
                var calcul = nombre[0] - nombre[1]
                $('#ecranCalcul').val(calcul)
                historique.push(ecranCalcul + '=' + calcul)

            }
            else if(indexQuatre != -1)
            {

                var nombre = ecranCalcul.split('+');
                var calcul = parseInt(nombre[0]) + parseInt(nombre[1])
                $('#ecranCalcul').val(calcul)
                historique.push(ecranCalcul + '=' + calcul)


            }

        }
        else
        {
  
            $('#ecranCalcul').val(valeur)

        }        
    });

    
    $('#boutonX6').on('click', function() {

        var valeur = $('#boutonX6').val();

        $('#ecranCalcul').val(0)
        
    });

    $(document).on('show.bs.modal', '.modal', function () {
        // run your validation... ( or shown.bs.modal )
        if(historique.length === 0)
        {

            $('.modal-body').html('<div class="alert alert-warning">Aucun historique pour le moment !</div>')

        }
        else
        {

            var resultatHistorique = ''
            var maxHistorique = 10;
            historique = historique.slice(-10)

            historique.forEach(element => {
                
                resultatHistorique += element + '<hr>'

            });

            $('.modal-body').html(resultatHistorique)

        }


    });


});