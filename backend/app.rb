require 'sinatra'
get '/' do
  'YOOO'
end

get '/brew' do
  exec( "sudo python ../brew/brew.py"  )
end
