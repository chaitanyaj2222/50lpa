function ListNode(val, next = null) {
    this.value = val;
    this.next = next;
}

let arr = [1, 2, 3, 4, 5];

function createLinkedListFromArray(arr) {
    let curr = null;
    let head = null;
    let temp = null
    for (let i = 0; i <= arr.length - 1; i++) {
        if (head === null) {
            head = new ListNode(arr[i])
            curr = head
            continue
        }
        curr.next = new ListNode(arr[i])
        if (i === 2) {
            temp = curr
        }
        curr = curr.next;


    }

    curr.next = temp

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



// let head = printSinglyLinkedList(createLinkedListFromArray(arr));

function hasCycle(head) {
    const visited = new Set();
    let curr = head;
    while (curr) {
        if (visited.has(curr)) {
            return true
        }
        visited.add(curr)
        curr = curr.next
    }
    return false
}


console.log(hasCycle(createLinkedListFromArray(arr)));


// use floyyd cycle detection for O(1) space complexity
