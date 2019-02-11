defmodule HelloModule do
  # A "Hello world" function
  def some_fun do
    IO.puts "Hello World!"
  end
  # This one works only with lists
  def some_fun(list) when is_list(list) do
    IO.inspect list
  end
  # A private function
  defp priv do
    :secret_info
  end
end
HelloModule.some_fun
#=> "Hello World!"
kw = [another_key: 20, key: 10]
kw[:another_key]
#=> 20
Regex.run ~r/abc\s/, "abc "
#=> ["abc "]
