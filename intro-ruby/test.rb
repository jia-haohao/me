i = 0
blog_number = {title:"",content:""}
blog = []
while i<3
  puts "タイトルを入力"
  blog_number[:title]=gets

  puts "本文を入力"
  blog_number[:content]

  p blog_number
  p blog

  puts "配列#{blog_number}に格納"
  blog.push(blog_number)

  p blog
  i += 1
end