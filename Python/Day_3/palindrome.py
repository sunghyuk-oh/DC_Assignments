def find_palindrom_word(word):
  reversed_word = ""

  for i in range(len(word)-1, -1, -1):
    reversed_word += word[i]

  if word == reversed_word:
    return True
  else:
    return False


while True:
  word = input("Please enter a word or q to quit: ")

  if word == 'q':
    print('Thank you for playing!')
    break

  if find_palindrom_word(word):
    print(f"The word, '{word}' is a palindrome.")
  else:
    print(f"The word, '{word}' is not a palindrome.")