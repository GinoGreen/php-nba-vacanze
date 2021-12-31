<?php 

   require_once __DIR__ . "/database.php";

   $matchesFiltered = [];
   
   if (isset($_GET['city']) && !($_GET['city'] === '')) {

      foreach ($matches as $match) {
         if ($match['city'] === $_GET['city']) {
            $matchesFiltered[] = $match;
         }
      }
   } else {
      $matchesFiltered = $matches;
   }
      
   header('Content-Type: application/json');

   echo json_encode($matchesFiltered);

?>