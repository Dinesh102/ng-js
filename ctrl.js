app.controller('myCtrl', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    var uid = 1;

    $scope.contacts = [{
        id: 0,
        'name': 'Viral',
        'email': 'hello@gmail.com',
        'phone': '123-2343-44'
    },
    {
        id: 1,
        'name': 'baranee',
        'email': 'hello@gmail.com',
        'phone': '123-2343-44'
    }];

    $scope.saveContact = function () {
        if ($scope.newcontact.id == null) {
            //  console.log("saveContact Called"+$scope.newcontact.name)
            console.log($scope.newcontact);
            $scope.newcontact.id = ++uid;
            $scope.contacts.push($scope.newcontact);
            $scope.newcontact = {};
        } 
    }
    //  $scope.update = function (uid)  
    //     {
    //         console.log("hello");
          
    // $scope.contacts[uid].name = $scope.newcontact.name;
    // $scope.contacts[uid].email = $scope.newcontact.email;
    // $scope.contacts[uid].phone = $scope.newcontact.phone;
    // console.log($scope.contacts);
    // }
           

    //     }
    
    
    // $scope.update=function(newcontact)
    // {
       
    //     $scope.newcontact = {};
    // }
    

    // $scope.edit=function(id){
    //     for (i in $scope.contacts) {
    //         if (contacts[i].id == id) {
    //            // return contacts[i]; 
    //            $scope.newcontact = angular.copy(contacts[i]);
    //         }
    //     }
    // }

    $scope.delete = function (uid) {
        // console.log(uid);
        for (i in $scope.contacts) {
            // console.log(i);
            if ($scope.contacts[i].id == uid) {
                $scope.contacts.splice(i, 1);
// $scope.saveContact(uid);
            }
        }
    }
    $scope.edit = function (uid) {
        console.log(uid);
        for (i in $scope.contacts) {
            if ($scope.contacts[i].id == uid) {
                console.log($scope.contacts[i]);
                $scope.newcontact = $scope.contacts[i];
                
            // $scope.update(uid);
        
        //    
        }
    }
    
}
    
});
    