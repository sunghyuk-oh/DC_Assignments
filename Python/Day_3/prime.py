def find_prime_number(num):
  if (num <= 1):
    return False
  else:
    for i in range(2, num):
      if (num % i == 0):
        return False

  return True


number = int(input("Enter a number: "))

if find_prime_number(number):
  print(f"{number} is a prime number")
else:
  print(f"{number} is not a prime number")