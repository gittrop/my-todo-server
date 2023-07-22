#!/usr/bin/bash
alias t="./t"

SET_JSON() {
read -r -d '' JSON << EOS
{
  "title": "$1",
  "description": "$2"
}
EOS
}

case "$1" in
    add)
        SET_JSON "${2:-compra-pane}" "${3:-perché pane buono}"
        #echo "$JSON"
        curl -X POST  \
            -H "Content-Type: application/json" \
            --data "$JSON" \
            "localhost:3000/todos"
    ;;
    list)
        curl -X GET "localhost:3000/todos"
    ;;
    *)
        echo "what?"
esac
