allow(user, "read", expense) if
    submitted(user, expense);

# managers can approve employee expenses
allow(user, "approve", expense) if
    employee in user.employees() and
    submitted(employee, expense);

submitted(user, expense) if
    user.email = expense.submitted_by;

new_fact(fact);

new_env(fact_2);
new_fact(new_f);
test_this(polar_param);
new_fact_2(p);
