function removeNode(head, n) {
    let gap = 0;
    let slow = head;
    let fast = head;
    while (fast) {
        if (gap >= (n + 1) ) {
            slow = slow.next;
            fast = fast.next;
        }
        else {
            fast = fast.next;
            gap++
        }
    }
    if(gap === n){
        return head.next
    }

    slow.next = slow.next.next;

    return head;

}