def compress_string(input_string):
    compressed = []
    count = 1

    for i in range(1, len(input_string)):
        if input_string[i] == input_string[i - 1]:
            count += 1
        else:
            compressed.append(input_string[i - 1] + str(count))
            count = 1

    #adds the character and its count to the end of the compressed list
    compressed.append(input_string[-1] + str(count))

    #combines entries in list into a single string
    compressed_str = ''.join(compressed)

    if len(compressed_str) < len(input_string):
        return compressed_str
    else:
        return input_string


# ---------Tests---------

original_str = "aaabcccccaaa"
compressed_str = compress_string(original_str)
print(compressed_str)  # Output: "a3b1c5a3"

original_str2 = "abcdef"
compressed_str2 = compress_string(original_str2)
print(compressed_str2)  # Output: "abcdef" (compressed is not smaller)
