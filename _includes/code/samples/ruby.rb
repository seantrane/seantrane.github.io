puts 'Hello World!'

def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Sean'.upcase())
#=> prints 'Hi, SEAN' to STDOUT.
class String
  def NullOrEmpty?
  (self == nil || self == "")
  end
end
puts "test".NullOrEmpty?
puts "".NullOrEmpty?
