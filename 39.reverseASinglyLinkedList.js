function ListNode(val, next = null) {
    this.value = val;
    this.next = next;
}

let arr = [1, 2];

function createLinkedListFromArray(arr) {
    let curr = null;
    let head = null;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (head === null) {
            head = new ListNode(arr[i])
            curr = head
            continue
        }
        curr.next = new ListNode(arr[i])
        curr = curr.next;

    }

    return head;
}

function printSinglyLinkedList(head) {
    let curr = head;
    while (curr) {
        console.log("value", curr.value);
        curr = curr.next;
    }

    return head;

}



let head = printSinglyLinkedList(createLinkedListFromArray(arr));

console.log(
    "head for reversal", head
)

function reverseSinglyLinkedList(head) {
    if(head === null || head.next === null){
        return head
    }
    let prev = head;
    let curr = head?.next
    let next = curr?.next;

    while (curr !== null) {
        curr.next = prev;
        prev = curr;
        curr = next;
        next = curr?.next
    }

    if (head) {
        head.next = null;

    }
    head = prev;
    prev = null;

    return head;

}


console.log("Reversed linked list", printSinglyLinkedList(reverseSinglyLinkedList(head)));
;
