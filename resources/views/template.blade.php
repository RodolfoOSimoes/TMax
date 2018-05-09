<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Books</title>

        <!-- styles -->
        <link rel="stylesheet" href="/css/app.min.css" type="text/css">
        <!-- end styles -->
    </head>
    <body>
        <main id="application" class="application">
            <div class="application__content">
                <!-- content -->
                @yield('content')
                <!-- end content -->
            </div>
        </main>
        <!-- scripts -->
        <script src="/js/app.min.js" type="text/javascript"></script>
        <!-- end scripts -->
    </body>
</html>
