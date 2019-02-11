<?php
class HelloWorld {
  // property declaration
  public $text = 'Hello World!';
  // static method declaration
  static public function display() {
    $obj = new static;
    echo $obj->text;
  }
}
HelloWorld::display();
