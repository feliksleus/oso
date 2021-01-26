allow(user, "read", expense) if
    submitted(user, expense);

# managers can approve employee expenses
allow(user, "approve", expense) if
    employee in user.employees() and
    submitted(employee, expense);

submitted(user, expense) if
    user.email = expense.submitted_by;

new_fact(fact);
