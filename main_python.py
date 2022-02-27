# A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal(base 10).

# For example, take 153 (3 digits), which is narcisstic:

#     1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153
# and 1652 (4 digits), which isn't:

#     1 ^ 4 + 6 ^ 4 + 5 ^ 4 + 2 ^ 4 = 1 + 1296 + 625 + 16 = 1938
# The Challenge:

# Your code must return true or false(not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

# Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

def narcissistic(value):
    num_string = str(value)
    num_length = len(num_string)
    total = 0

    for num in num_string:
        total += int(num) ** num_length
    return total == value

# //////////////////////////////////////////////////////////2/26/22

# Write a function that accepts an array of 10 integers(between 0 and 9), that returns a string of those numbers in the form of a phone number.

# Example
# # => returns "(123) 456-7890"
# create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
# The returned format must be correct in order to complete this challenge.
# Don't forget the space after the closing parentheses!


def create_phone_number(n):
    s = "".join((str(element) for element in n))
    return f'({s[:3]}) {s[3:6]}-{s[6:]}'


# Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

# Your task is to write a function maskify, which changes all but the last four characters into '#'.

# Examples
# maskify("4556364607935616") == "############5616"
# maskify("64607935616") == "#######5616"
# maskify("1") == "1"
# maskify("") == ""

# # "What was the name of your first pet?"
# maskify("Skippy") == "##ippy"
# maskify("Nananananananananananananananana Batman!") == "####################################man!"


def maskify(cc):
    beginning = '#' * len(cc[0:-4])
    end = cc[-4:]
    return beginning + end
