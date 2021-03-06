
<!doctype html>

<html lang="{{ app()->getLocale() }}">

    <head>

        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />

        <title>Password Pocket</title>

        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
        <link href="css/style.css" rel="stylesheet" type="text/css">
        <link href="css/welcome.css" rel="stylesheet" type="text/css">
        <link href="css/animation.css" rel="stylesheet" type="text/css">
        <link href="css/home.css" rel="stylesheet" type="text/css">

        <link href="https://fonts.googleapis.com/css?family=Unica+One" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet">

        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    </head>

    <body>
        <div id="root"></div>
        <script src="{{mix('js/app.js')}}" ></script>
    </body>

</html>
