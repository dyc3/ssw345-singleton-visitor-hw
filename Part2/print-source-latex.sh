#!/bin/bash

cd $(dirname $0) || exit 1

while read -r f; do
	echo "\begin{lstlisting}[language=Java]"
	cat "$f"
	echo "\end{lstlisting}"
done < <(find src -name '*.java')
