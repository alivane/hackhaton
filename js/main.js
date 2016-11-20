$(document).ready(function() {
    var _new_girl = [
        ["Elvira Ponce",
            "http://placehold.it/300x300",
            "Madre de Sandra",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        ["Dominique Salcedo",
            "http://placehold.it/300x300",
            "Madre de Alonso",
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        ],
        ["Juanita Rubilar",
            "http://placehold.it/300x300",
            "Madre de Victoria",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        ["Verónica Troncoso",
            "http://placehold.it/300x300",
            "Madre de Renato",
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        ]
    ];
    var _reward = [
        [
            "img/perfil4.jpg",
            "These cases are perfectly simple and easy to distinguish."
        ],
        ["img/perfil3.jpg",
            "These cases are perfectly simple and easy to distinguish."
        ],
        ["img/perfil2.jpg",
            "These cases are perfectly simple and easy to distinguish."
        ],
        ["img/perfil1.jpg",
            "These cases are perfectly simple and easy to distinguish."
        ]
    ]
    var _value = "";


    for (i = 0; i <= _new_girl.lenght; i++) {
        if (i != 0) {
            _new_girl = '<img src="' + _new_girl[i] + '"/>';
            _value = "";
        } else {
            _new_girl = '<img src="' + _new_girl[i] + '" class="active"/>';
            _value = "active";
        }

    }
    $(".info-image").append('<img src="' + _new_girl[0][1] + '"/>');
    $(".text-image").append('<h4 class="perfil ' + _value + '">' + _new_girl[0][0] + '</h4><p class="descen' + _value + '"><small>' + _new_girl[0][2] + '</small></p><p class="' + _value + 'descrip">' + _new_girl[0][3] + '</p>');

    for (i = 0; i <= _reward.lenght; i++) {
        if (i != 0) {
            _reward = '<img src="http://placehold.it/140x100"/>';
            _value = "";
        } else {
            _reward = '<img src="http://placehold.it/140x100" class="active"/>';
            _value = "active";
        }
    }

    $("rewards").append("<h4><strong>Recompensas</strong></h4>")

        



});
