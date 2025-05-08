<?php
class User implements Authenticatable{
  use Timestamp;
  private $name;
  private $email;
  
  public function __construct($name, $email){
    $this->name=$name;
    $this->email=$email;
  }
  
  public function display(){
    return "name: ".$this->name.", email: ".$this->email;
  }
  
    public function login(){
    return $this->name."est logining";
  }
  
    public function authCheck($obj){
      if($obj instanceof Authenticatable){
        $obj->login();
      }else{
        echo "non Authenticatable";
      }
    }

}

class Admin extends User{
  private $role;
  
  public function __construct($name, $email, $role){
    parent::__construct($name, $email);
    $this->role= $role;
  }
  
    public function display(){
    return "name: ".$this->name.", email: ".$this->email.", role:".$this->role;
  }
  
  public function login(){
    return $this->name."est logining";
  }
  
}

class Guest extends User{
  
  public function __construct($name, $email){
    parent::_construct($name, $email);
  }
  
  public function display(){
    return "name: ".$this->name."email: ".$this->email;
  }
}



Interface Authenticatable {
  public function login();
  public function authCheck($obj);
} 

 trait Timestamp{
   public function createdAt(){
     echo "crée le:". date('Y-m-d H:i:s');
   }
   
   public function updateAt(){
          echo "update le:". date('Y-m-d H:i:s');
   }
 }
 
 class Session {
   public static $counter=0;
   
   public function increment(){
     self::$counter++;
   }
   
   public function display(){
     echo static::$counter;
   }
   
   final public function close(){
     echo "session close";
   }
 }
 
 class SecureSession extends Session{
   
   public function display(){
     echo static::$counter;
   }
   
 }

$user= new User("mohsen", "gmail");
echo($user->display()) ;
echo "</br>";
$user->createdAt();

$admin= new Admin("admin", "gmail", "responsable");
echo($admin->display());
echo($admin->login());