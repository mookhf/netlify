#!/bin/bash

cat << START
<html>
    <body> <h1>welcome to xfire's easy link</h1> 
START

for file in $(ls *)
do
    if [ "build_index.sh" != "$file" ]
    then
	echo "		<h3><a href=\"$file\">$file</a></h3>"
    fi
done

cat << END
    </body>
</html>
END