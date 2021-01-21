allow(user, "read", expense) if
    submitted(user, expense);

# managers can approve employee expenses
allow(user, "approve", expense) if
    employee in user.employees() and
    submitted(employee, expense);

submitted(user, expense) if
    user.email = expense.submitted_by;

new_fact(fact);


new_env(fact_1, fact_2);
new_fact(new_f);
test_this(polar_param);
new_fact_2(p);
new_rule(p);
new_rule(p);
sample(par);
sample_rule(par);
sample(p1, p2);
sample(x);
st(x);
ok(x);
ok2(x);
ok3(x);
ok4(x);
ok5(x);
ok6(x);
ok7(x);
ok8(x);
ok9(x);
ok(x_1);
another(x);